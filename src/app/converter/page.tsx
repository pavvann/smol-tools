"use client"

import { useState } from 'react';
import CopyButton from "../components/CopyButton";

export default function ETHConverter() {
  const [eth, setEth] = useState('');
  const [gwei, setGwei] = useState('');
  const [wei, setWei] = useState('');

  const convertFromEth = (value: string) => {
    const ethValue = parseFloat(value);
    if (!isNaN(ethValue)) {
      setGwei((ethValue * 1e9).toString());
      setWei((ethValue * 1e18).toString());
    } else {
      setGwei('');
      setWei('');
    }
  };

  const convertFromGwei = (value: string) => {
    const gweiValue = parseFloat(value);
    if (!isNaN(gweiValue)) {
      setEth((gweiValue / 1e9).toString());
      setWei((gweiValue * 1e9).toString());
    } else {
      setEth('');
      setWei('');
    }
  };

  const convertFromWei = (value: string) => {
    const weiValue = parseFloat(value);
    if (!isNaN(weiValue)) {
      setEth((weiValue / 1e18).toString());
      setGwei((weiValue / 1e9).toString());
    } else {
      setEth('');
      setGwei('');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">ETH-GWEI-WEI Converter</h1>
      <div className="flex flex-col gap-4 w-96">
        
        {/* ETH Input with Copy Button */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter ETH value"
            value={eth}
            onChange={(e) => {
              setEth(e.target.value);
              convertFromEth(e.target.value);
            }}
            className="p-2 border rounded w-full pr-12"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <CopyButton textToCopy={eth} />
          </div>
        </div>

        {/* Gwei Input with Copy Button */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Gwei value"
            value={gwei}
            onChange={(e) => {
              setGwei(e.target.value);
              convertFromGwei(e.target.value);
            }}
            className="p-2 border rounded w-full pr-12"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <CopyButton textToCopy={gwei} />
          </div>
        </div>

        {/* Wei Input with Copy Button */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Wei value"
            value={wei}
            onChange={(e) => {
              setWei(e.target.value);
              convertFromWei(e.target.value);
            }}
            className="p-2 border rounded w-full pr-12"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <CopyButton textToCopy={wei} />
          </div>
        </div>

      </div>
    </main>
  );
}
