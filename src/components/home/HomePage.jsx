import React from "react";
import { Link } from "react-router-dom";
import Crypto from "../cyrpto_currencies/Crypto";
import Loader from "../loader/Loader";
import News from "../news/News";
import "./home.css";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import millify from "millify";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalstats = data?.data?.stats;

  if (isFetching) {
    return (
      <>
        <div className="py-3 mt-5">
          <div className="mt-5">
            <h4 className="bold font-20 white text-center text-uppercase mt-5 mb-5">
              Global Crypto Statistics
            </h4>
            <div className="mt-5">
              <div className="text-center mt-5" style={{ marginTop: "40%" }}>
                <Loader />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (globalstats.length === 0) {
    return (
      <>
        <div className="py-3 mt-5">
          <h4 className="bold font-20 white text-center text-uppercase">
            Global Crypto Statistics
          </h4>
          <div className="text-center mt-5" style={{ marginTop: "25%" }}>
            <Loader />
            <h4 className="white">No Statistics Rendered.</h4>
          </div>
        </div>
      </>
    );
  }
  return (
    <section className="home py-3 px-2">
      <div className=" m-3">
        <h4 className="bold font-20 white  text-center text-uppercase">
          Global Crypto Statistics
        </h4>
        <div className="row">
          <div className="col-sm-3 col-6  p-2">
            <Link
              to="/cryptocurrencies"
              className="dark"
              style={{ textDecoration: "none" }}
            >
              <div
                className="info shadow p-3 white-bg"
                style={{ borderRadius: "10px" }}
              >
                <h3 className="font-15 light dark">Total Coins</h3>
                <span className="bold font-26">
                  {millify(globalstats.total)}
                </span>
              </div>
            </Link>
          </div>
          <div className="col-sm-3 col-6  p-2">
            <Link
              to="/cryptocurrencies"
              className="dark"
              style={{ textDecoration: "none" }}
            >
              <div
                className="info shadow p-3 white-bg"
                style={{ borderRadius: "10px" }}
              >
                <h3 className="font-15 light dark">Total Market Cap</h3>
                <span className="bold font-26">
                  {millify(globalstats.totalMarketCap)}
                </span>
              </div>
            </Link>
          </div>
          <div className="col-sm-3 col-6  p-2">
            <Link
              to="/cryptocurrencies"
              className="dark"
              style={{ textDecoration: "none" }}
            >
              <div
                className="info shadow p-3 white-bg"
                style={{ borderRadius: "10px" }}
              >
                <h3 className="font-15 light dark">Total 24H Vol.</h3>
                <span className="bold font-26">
                  {millify(globalstats.total24hVolume)}
                </span>
              </div>
            </Link>
          </div>
          <div className="col-sm-3 col-6  p-2">
            <Link
              to="/cryptocurrencies"
              className="dark"
              style={{ textDecoration: "none" }}
            >
              <div
                className="info shadow p-3 white-bg"
                style={{ borderRadius: "10px" }}
              >
                <h3 className="font-15 light dark">Total Markets</h3>
                <span className="bold font-26">
                  {millify(globalstats.totalMarkets)}
                </span>
              </div>
            </Link>
          </div>
          <div className="col-sm-3 col-6  p-2">
            <Link
              to="/cryptocurrencies"
              className="dark"
              style={{ textDecoration: "none" }}
            >
              <div
                className="info shadow p-3 white-bg"
                style={{ borderRadius: "10px" }}
              >
                <h3 className="font-15 light dark">Total Exchanges</h3>
                <span className="bold font-26">
                  {millify(globalstats.totalExchanges)}
                </span>
              </div>
            </Link>
          </div>
          <div className="col-sm-3 col-6  p-2">
            <Link
              to="/cryptocurrencies"
              className="dark"
              style={{ textDecoration: "none" }}
            >
              <div
                className="info shadow p-3 white-bg"
                style={{ borderRadius: "10px" }}
              >
                <h3 className="font-15 light dark">Total Market</h3>
                <span className="bold font-26">
                  {millify(globalstats.total)}
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Top ten cryptos in the world */}
        <div className="cyrpto mt-5">
          <h4 className="bold font-20 white text-center  text-uppercase">
            Top 10 Cryptocurrencies in the world
          </h4>
          <div>
            <Crypto simplified />
          </div>
        </div>

        <div className="news mt-5">
          <h4 className="bold font-20 white mt-5 text-center text-uppercase">
            Top Latest News
          </h4>
          <div>
            <News simplified />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
