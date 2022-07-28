import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Crypto from "./components/cyrpto_currencies/Crypto";
import CryptoDetails from "./components/cyrpto_details/CryptoDetails";
import Exchange from "./components/exchanges/Exchange";
import News from "./components/news/News";
import Navbar from "./components/navbar/Navbar";
import Mobile from "./components/mobile_nav/Mobile";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "./context";
import Error from "./components/error/Error";
import "./index.css";

const App = () => {
  const { showMenu, displayMenu } = useGlobalContext();

  return (
    <>
      <div className="app " style={{ position: "relative" }}>
        <div className="row">
          <div
            className="col-sm-4 col-md-3 col-lg-2 col-xs-12 p-0 m-0 shadow white-bg  nav-cont"
            style={{ height: "1640px" }}
          >
            <div className="navbar ">
              <Navbar />
            </div>
          </div>
          <div className="col-sm-8 sx-12 col-md-9 col-lg-10 dark-bg">
            <div className="main position-relative ">
              {!showMenu && (
                <div className="menu-toggler white m-2">
                  <AiOutlineMenu
                    className="font-34 bold border-menu dark-bg white p-2"
                    onClick={displayMenu}
                  />
                </div>
              )}

              <div
                className={`${
                  showMenu
                    ? "white-bg shadow show w-100 pt-5   pb-5 mobile"
                    : "mobile-menu w-100"
                } `}
                style={{
                  position: "absolute",
                  marginTop: "-13%",
                }}
              >
                <Mobile />
              </div>

              <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/news" element={<News />}></Route>
                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<Crypto />}
                ></Route>
                <Route exact path="/exchanges" element={<Exchange />}></Route>
                <Route
                  exact
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                ></Route>
                <Route paht="*" element={<Error />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
