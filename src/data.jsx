import { FaHome, FaNewspaper, FaEthereum, FaChartLine } from "react-icons/fa";
import { RiFundsBoxLine } from "react-icons/ri";
import { SiMicrosoftexchange } from "react-icons/si";
import { BsCurrencyExchange, BsCurrencyBitcoin } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import {
  SiMarketo,
  SiDogecoin,
  SiLitecoin,
  SiBitcoincash,
  SiBinance,
  SiCoinbase,
  SiGitkraken,
  SiXrp,
} from "react-icons/si";
import { TbCurrencyNaira } from "react-icons/tb";
import { GiOilDrum } from "react-icons/gi";
import { BiDollar } from "react-icons/bi";

import React from "react";
const sublinks = [
  {
    page: "Home",
    url: "/",
    icon: <FaHome className="dark" />,
    links: [
      {
        label: "Market Cap",
        icon: <SiMarketo className="font-15 light dark " />,
        url: "/",
      },
      {
        label: "Market Trend",
        icon: <FiTrendingUp className="font-15 light dark " />,
        url: "/",
      },
      {
        label: "24H Volume",
        icon: <GiOilDrum className="font-15 light dark " />,
        url: "/",
      },
    ],
  },
  {
    page: "Cryptocurrencies",
    url: "/cryptocurrencies",
    icon: <RiFundsBoxLine className="dark" />,
    links: [
      {
        label: "Bitcoin",
        icon: <BsCurrencyBitcoin className="font-15 light dark " />,
        url: "/crypto/Qwsogvtv82FCd",
      },
      {
        label: "Ethereum",
        icon: <FaEthereum className="font-15 light dark " />,
        url: "/crypto/razxDUgYGNAdQ",
      },
      {
        label: "Doge Coin",
        icon: <SiDogecoin className="font-15 light dark " />,
        url: "/crypto/a91GCGd_u96cF",
      },

      {
        label: "Binance Coin",
        icon: <SiBinance className="font-15 light dark " />,
        url: "/crypto/WcwrkfNI4FUAe",
      },

      {
        label: "Lite Coin",
        icon: <SiLitecoin className="font-15 light dark " />,
        url: "/crypto/D7B1x_ks7WhV5",
      },
      {
        label: "Bitcoin Cash",
        icon: <SiBitcoincash className="font-15 light dark " />,
        url: "/crypto/ZlZpzOJo43mIo",
      },
      {
        label: "Xrp",
        icon: <SiXrp className="font-15 light dark " />,
        url: "/crypto/-l8Mn2pVlRs-p",
      },
    ],
  },
  {
    page: " Exchanges",
    url: "/",
    icon: <SiMicrosoftexchange className="dark" />,
    links: [
      {
        label: "Binance",
        icon: <SiBinance className="font-15 light dark " />,
        url: "/",
      },
      {
        label: "Coinbase",
        icon: <SiCoinbase className="font-15 light dark " />,
        url: "/",
      },
      {
        label: "Kraken",
        icon: <SiGitkraken className="font-15 light dark " />,
        url: "/",
      },
    ],
  },
  {
    page: " News",
    url: "/news",
    icon: <FaNewspaper className="dark" />,
    links: [
      {
        label: "News on Us Dollar",
        icon: <BiDollar className="font-15 light dark " />,
        url: "/news",
      },
      {
        label: "News on Nigerian Naira",
        icon: <TbCurrencyNaira className="font-15 light dark " />,
        url: "/news",
      },
    ],
  },
];

export default sublinks;
