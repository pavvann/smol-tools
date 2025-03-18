"use client"
import { useState } from 'react';
import { chainInfo } from '../config';
import { ethers } from 'ethers';

export default function NFTChecker() {
  const [walletAddress, setWalletAddress] = useState('');
  const [contractAddress, setContractAddress] = useState("");
  const [network, setNetwork] = useState('monadTestnet');
  const [nftType, setNftType] = useState("721");
  const [tokenId, setTokenId] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const checker = async () => {
    try {
      setError(null);
      setResult(null);
  
      if (!(network in chainInfo)) {
        setError('Selected network not found in config.');
        return;
      }

      const provider = new ethers.JsonRpcProvider(chainInfo[network as keyof typeof chainInfo].rpcUrl);

      let abi;
      if (nftType === "1155") {
        if (!tokenId) {
          setError('Token ID is required for ERC1155.');
          return;
        }
        abi = ["function balanceOf(address account, uint256 id) external view returns (uint256)"];
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const check = await contract.balanceOf(walletAddress, tokenId);
        setResult(`Balance: ${check.toString()}`);
      } else {
        abi = ["function balanceOf(address owner) external view returns (uint256)"];
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const check = await contract.balanceOf(walletAddress);
        setResult(`Balance: ${check.toString()}`);
      }
    } catch (error) {
      console.error(error);
      setError('Failed to fetch data');
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">NFT Checker</h1>
      <div className="flex flex-col gap-4 w-96">
        <select className="p-2 border rounded" value={network} onChange={(e) => setNetwork(e.target.value)}>
          <option value="monadTestnet">Monad Testnet</option>
        </select>
        <select className="p-2 border rounded" value={nftType} onChange={(e) => setNftType(e.target.value)}>
          <option value="721">ERC721</option>
          <option value="1155">ERC1155</option>
        </select>
        {nftType === "1155" && (
          <input
            type="text"
            placeholder="Enter Token ID"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            className="p-2 border rounded"
          />
        )}
        <input
          type="text"
          placeholder="Enter Contract Address"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="p-2 border rounded"
        />
        <button onClick={checker} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Check NFTs</button>

        {result && <div className="p-2 border rounded bg-green-100 text-green-700">{result}</div>}
        {error && <div className="p-2 border rounded bg-red-100 text-red-700">{error}</div>}
      </div>
    </main>
  );
}
