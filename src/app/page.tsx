"use client";
import React from "react";
import Image from "next/image";
import { mainnet, polygon, sepolia } from "viem/chains";
import {
  WagmiProvider,
  createConfig,
  http,
  useAccount,
  useConnect,
  useDisconnect,
} from "wagmi";
import { coinbaseWallet, metaMask, walletConnect } from "wagmi/connectors";
import Web3AuthConnectorInstance from "@/auth/web3AuthContextConfig";
import Profile from "@/components/Profile";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Profile />
      </div>
    </main>
  );
}
