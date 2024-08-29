import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, sepolia } from "viem/chains";
import { coinbaseWallet, metaMask } from "wagmi/connectors";
import Web3AuthConnectorInstance from "@/auth/web3AuthContextConfig";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nomad Key",
  description: "A place to get your rental cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
