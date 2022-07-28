import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context";
import sublinks from "../../data";

import "./navbar.css";
const Navbar = () => {
  const { toggleTheme, theme } = useGlobalContext();
  return (
    <section className="navbar  w-100 ">
      <div className="w-100">
        <div className="logo px-5 py-4 mb-3">
          <h3 className="bold dark">
            Crypto<span className="blue">Lite</span>
          </h3>
        </div>

        <div className="nav_links  w-100">
          {sublinks.map((link, i) => {
            const { page, url, icon } = link;
            return (
              <>
                <div className="link  dark  px-4 py-3 d-flex" key={i}>
                  {icon}
                  <Link
                    to={url}
                    className="light font-17 dark  px-3"
                    style={{ textDecoration: "none" }}
                  >
                    {page}
                  </Link>
                </div>{" "}
                <br />
              </>
            );
          })}
        </div>
        <div className="p-3">
          <button className="btn  py-2 px-2 btn-crypto" onClick={toggleTheme}>
            {theme === "light-theme" ? "Switch Light Mode" : "Switch Dark Mode"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
