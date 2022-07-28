import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import Loader from "../loader/Loader";
import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";

import LineChart from "../linechart/LineChart";

import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const CryptoDetails = () => {
  const { coinId } = useParams();
  // const [timePeriod, setTimePeriod] = useState("7d");

  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);

  const cryptoDetails = data?.data?.coin;
  // console.log(coinHistory);

  if (isFetching)
    return (
      <div className="text-center mt-5" style={{ marginTop: "200px" }}>
        <div className="mt-5">
          <div className="mt-5">
            <Loader />
          </div>
        </div>
      </div>
    );

  // const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        data?.data?.coin["24hVolume"] && millify(data?.data?.coin["24hVolume"])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <section className="">
      <div className="container mt-4">
        <div className="header text-center py-1">
          <h3 className="white font-20  bold">
            {" "}
            {cryptoDetails.name} ({cryptoDetails.symbol}) Price{" "}
          </h3>
          <p className="white font-12 light opacity">
            {cryptoDetails.name} live price in US Dollar (USD). View value
            statistics, market cap and supply.
          </p>
        </div>
        <hr />

        {/* <div className="charts">
          <form>
            <select
              name=""
              id=""
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="light"
            >
              {time.map((date) => (
                <option value={date} key={date}>
                  {date}
                </option>
              ))}
            </select>
          </form>
        </div> */}

        <div className="stats">
          <div className="row">
            <div className="col-sm-6 mb-3  white">
              <h3 className="white font-16 text-center text-uppercase mt-2 bold">
                {" "}
                {cryptoDetails.name} Value Statistics
              </h3>
              <p className="font-13">
                <p className="text-center">
                  An overview showing the statistics of {cryptoDetails.name},
                  such as the base and quote currency, the rank, and trading
                  volume.
                </p>
              </p>
              {stats.map(({ icon, title, value }, i) => (
                <div
                  className="p-2"
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderBottom: "1px solid gray",
                    alignItems: "center",
                  }}
                >
                  <div className="title p-1">
                    {icon}
                    <span className="mx-2 font-14"> {title} </span>
                  </div>
                  <div className="price font-14 light">{value}</div>
                </div>
              ))}
            </div>

            <div className="col-sm-6  white">
              <h3 className="white font-16 text-center text-uppercase mt-2 bold">
                {" "}
                Other Statistics
              </h3>
              <p className="font-13">
                <p className="text-center">
                  An overview showing the statistics of all cryptocurrency, such
                  as the base and quote currency, the rank, and trading volume.
                </p>
              </p>
              {genericStats.map(({ icon, title, value }, i) => (
                <div
                  className="p-2"
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderBottom: "1px solid gray",
                    alignItems: "center",
                  }}
                >
                  <div className="title p-1">
                    {icon}
                    <span className="mx-2 font-14"> {title} </span>
                  </div>
                  <div className="price font-14 light">{value}</div>
                </div>
              ))}
            </div>

            <div className="col-sm-6">
              <h3 className="white font-16 bold  text-uppercase mt-4">
                What is {cryptoDetails.name}?
              </h3>
              <div className="lighter white">
                {HTMLReactParser(cryptoDetails.description)}
              </div>
            </div>

            <div className="col-sm-6">
              <div className="links">
                {" "}
                <h3 className="white font-16  text-uppercase bold mt-4">
                  {cryptoDetails.name} Links
                </h3>
                <div>
                  {cryptoDetails.links?.map((link, i) => (
                    <div
                      key={i}
                      className="p-2"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderBottom: "1px solid gray",
                        alignItems: "center",
                      }}
                    >
                      <div className="title p-1 white light">{link.type}</div>
                      <div className="price font-14 light blue">
                        {link.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoDetails;
