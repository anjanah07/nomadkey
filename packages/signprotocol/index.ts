import { SignProtocolClient, SpMode, EvmChains } from "@ethsign/sp-sdk";
import { privateKeyToAccount } from "viem/accounts";
const privateKey = "0xabc"; // Optional

export const ethclient = new SignProtocolClient(SpMode.OnChain, {
  chain: EvmChains.polygonMumbai,
  account: privateKeyToAccount(privateKey), // Optional if you are using an injected provider
});
