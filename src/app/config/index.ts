type ChainInfo = {
  [key: string]: {
    chainId: number;
    rpcUrl: string;
  };
};

export const chainInfo: ChainInfo = {

  monadTestnet: {
    chainId: 10143,
    rpcUrl: 'https://testnet-rpc.monad.xyz/'
  },
  ethereum: {
    chainId: 1,
    rpcUrl: 'https://ethereum-rpc.publicnode.com'
  },
  base: {
    chainId: 8453,
    rpcUrl: 'https://mainnet.base.org'
  },
  polygon: {
    chainId: 137,
    rpcUrl: 'https://polygon-rpc.com/'
  },
  arbitrum: {
    chainId: 42161,
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
  },
  opmainnet: {
    chainId: 10,
    rpcUrl: 'https://mainnet.optimism.io'
  },
  bnb: {
    chainId: 56,
    rpcUrl: 'https://bsc-dataseed1.binance.org/'
  },
  celo: {
    chainId: 42220,
    rpcUrl: 'https://docs.celo.org/network/node/forno'
  },
  scroll: {
    chainId: 534352,
    rpcUrl: 'https://rpc.scroll.io/'
  },
  mantle: {
    chainId: 5000,
    rpcUrl: 'https://rpc.mantle.xyz/'
  }
};