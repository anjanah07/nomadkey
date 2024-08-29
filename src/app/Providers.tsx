"use client";
import Web3AuthConnectorInstance from "@/auth/web3AuthContextConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { mainnet, sepolia } from "viem/chains";
import { WagmiProvider, createConfig, http } from "wagmi";
import { coinbaseWallet, metaMask } from "wagmi/connectors";

const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    metaMask(),
    coinbaseWallet({ appName: "wagmi" }),
    Web3AuthConnectorInstance([mainnet, sepolia]),
  ],
});
const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
};

export default Providers;
