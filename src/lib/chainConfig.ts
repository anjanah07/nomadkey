import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

export const chain: {
  [key: string]: CustomChainConfig;
} = {
  sepolia: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0xaa36a7",
    displayName: "Ethereum Sepolia",
    tickerName: "Ethereum",
    ticker: "ETH",
    rpcTarget: "https://rpc.ankr.com/eth_sepolia",
    blockExplorerUrl: "https://sepolia.etherscan.io",
    logo: "https://web3auth.io/images/web3authlog.png",
  },
};
