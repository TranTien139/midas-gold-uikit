import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import MidasWallet from "./icons/midasWallet";
import Coin98Wallet from "./icons/coin98Wallet";
import BinanceChain from "./icons/BinanceChain";
import { Config } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
  },
  {
    title: "MidasWallet",
    icon: Metamask,
    connectorId: "injected",
  },
  {
    title: "Coin98Wallet",
    icon: Metamask,
    connectorId: "injected",
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: "injected",
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: "injected",
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: "injected",
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: "walletconnect",
  },
  {
    title: "Binance Chain Wallet",
    icon: BinanceChain,
    connectorId: "bsc",
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
