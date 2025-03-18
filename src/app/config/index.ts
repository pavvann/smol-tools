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
    }
  };