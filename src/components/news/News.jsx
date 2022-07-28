import React, { useState } from "react";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Loader from "../loader/Loader";

import moment from "moment";

const demo =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");

  const { data: cryptos } = useGetCryptosQuery(100);
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 25,
  });

  if (isFetching) {
    return (
      <>
        {!simplified && (
          <div className="header my-5">
            <h3 className="white light font-20 text-center">
              Get the latest news on your favourite coin
            </h3>
            <form>
              <select
                className="w-100 form-control"
                onChange={(e) => setNewsCategory(e.target.value)}
                value={newsCategory}
              >
                <option value="Cryptocurrency">Cryptocurrency</option>
                {cryptos?.data?.coins.map((crypto) => {
                  return (
                    <>
                      <option value={crypto.name} key={crypto.id}>
                        {crypto.name}
                      </option>
                    </>
                  );
                })}
              </select>
            </form>
          </div>
        )}
        <div className="text-center mt-5">
          <Loader />
          <h4 className="white">Loading ...</h4>
        </div>
      </>
    );
  }

  return (
    <section className="crypto px-3 ">
      {!simplified && (
        <div className="header my-5">
          <h3 className="white light font-20 text-center">
            Get the latest news on your favourite coin
          </h3>
          <form>
            <select
              className="w-100 form-control"
              onChange={(e) => setNewsCategory(e.target.value)}
              value={newsCategory}
            >
              <option value="Cryptocurrency">Cryptocurrency</option>
              {cryptos?.data?.coins.map((crypto) => {
                return (
                  <>
                    <option value={crypto.name} key={crypto.id}>
                      {crypto.name}
                    </option>
                  </>
                );
              })}
            </select>
          </form>
        </div>
      )}

      {cryptoNews.length === 0 && (
        <h3 className="white text-center mt-5">No News currently rendered</h3>
      )}

      <div className="row">
        {cryptoNews?.value?.map((news, i) => {
          return (
            <div className="col-sm-4 col-12 p-1 my-2" key={i}>
              <a href={news.url} style={{ textDecoration: "none" }}>
                <div
                  className="shadow px-4 py-2 white-bg"
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
                      {" "}
                      {`${news.name.substring(0, 70)}...`}
                    </h4>
                    <img
                      src={news?.image?.thumbnail?.contentUrl || demo}
                      alt=""
                      style={{
                        marginTop: "-20px",
                        width: "40%",
                        height: "100px",
                      }}
                      className="mx-1"
                    />
                  </div>
                  <div className="cryptoInfo my-3">
                    <p className=" font-14 dark opacity">
                      {`${news.description.substring(0, 110)}...`}
                    </p>
                  </div>
                  <div
                    className="prob"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <img
                        src={news.provider[0]?.image?.thumbnail?.contentUrl}
                        alt=""
                        style={{
                          verticalAlign: "middle",
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      />
                      <span className="font-12 mx-2 blue mt-1 light">
                        {news.provider[0]?.name}
                      </span>
                    </div>

                    <div>
                      <span className="light font-12">
                        {moment(news?.datePublished).startOf("ss").fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
