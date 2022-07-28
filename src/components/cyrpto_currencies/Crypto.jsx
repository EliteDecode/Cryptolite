import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCurrencyExchange, BsCurrencyBitcoin } from "react-icons/bs";
import Loader from "../loader/Loader";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import millify from "millify";

const Crypto = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState(data?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filteredCoins = data?.data?.coins?.filter((coin) =>
      coin?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    setCryptos(filteredCoins);
  }, [searchTerm, cryptos]);

  if (isFetching) {
    return (
      <>
        {!simplified && (
          <div className="my-5">
            <h3 className="white light font-20 text-center">
              Search For Your Favourite Coin
            </h3>
            <form action="">
              <input
                type="search"
                placeholder="e.g. Bitcoin"
                className="form-control"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        )}

        <div className="text-center mt-5" style={{ marginTop: "45%" }}>
          <div className="mt-5">
            <div className="mt-5">
              <Loader />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="crypto px-3">
      {!simplified && (
        <div className="my-5">
          <h3 className="white bold font-18 text-center">
            Search For Your Favourite Coin
          </h3>
          <form action="">
            <input
              type="search"
              placeholder="e.g. Bitcoin"
              className="form-control"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      )}

      {cryptos?.length === 0 && (
        <h3 className="white text-center mt-5">No coin currently rendered</h3>
      )}

      <div className="row ">
        {cryptos?.map((crypto) => {
          return (
            <div className="col-sm-3 col-6 p-1 my-2" key={crypto.uuid}>
              <Link
                to={`/crypto/${crypto.uuid}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="shadow px-3 py-2 white-bg"
                  style={{ borderRadius: "10px" }}
                >
                  <div
                    className="header mt-3"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderBottom: "1px solid  #e9ecef",
                    }}
                  >
                    <h4 className="bold font-13 dark">
                      {crypto.rank} . {crypto.name.substring(0, 8)}
                    </h4>
                    <img
                      src={crypto.iconUrl}
                      alt=""
                      style={{ marginTop: "-20px", width: "20%" }}
                    />
                  </div>
                  <div className="cryptoInfo my-3">
                    <h3 className="lighter font-13 dark">
                      {" "}
                      Price :{" "}
                      <span className="bold font-13 dark my-2">
                        {millify(crypto.price)}
                      </span>{" "}
                    </h3>
                    <h3 className="lighter font-13 dark">
                      Market Cap :
                      <span className="bold font-13 dark my-2">
                        {millify(crypto.marketCap)}
                      </span>{" "}
                    </h3>
                    <h3 className="lighter font-13 dark">
                      Daily % :{" "}
                      <span className=" bold font-13 dark my-2">
                        {crypto.change < 1 ? (
                          <span style={{ color: "red bold" }}>
                            {`${crypto.change}`} %
                          </span>
                        ) : (
                          <span style={{ color: "green bold" }}>
                            {`${crypto.change}`} %
                          </span>
                        )}{" "}
                      </span>
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Crypto;
