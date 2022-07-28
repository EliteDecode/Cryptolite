import React from "react";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import { GiOilDrum } from "react-icons/gi";
import { BiDollar } from "react-icons/bi";
import { FaRegWindowClose } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import sublinks from "../../data";
const Mobile = () => {
  const { closeMenu, toggleTheme, theme } = useGlobalContext();
  return (
    <section className="mob ">
      <button className="btn py-2 px-2 btn-crypto  m-2" onClick={toggleTheme}>
        {theme === "light-theme" ? "Switch Light Mode" : " Switch Dark Mode"}
      </button>
      <div className="close m-2" style={{ float: "right" }}>
        <FaRegWindowClose className="bold font-28 dark" onClick={closeMenu} />
      </div>

      {sublinks.map((sublink, i) => {
        const { url, icon, page, links } = sublink;

        return (
          <div
            className="links px-4 py-3"
            style={{ clear: "both", borderBottom: "1px solid #fdfdfda8" }}
            key={i}
          >
            <div
              className="link-head dark my-1"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {icon}
              <Link
                to={url}
                className="px-3 bold font-20 dark"
                style={{ textDecoration: "none" }}
                onClick={closeMenu}
              >
                {page}
              </Link>
            </div>
            <div className="sub-links display-grid w-100 px-2 ">
              {links.map((link, i) => {
                const { label, icon, url } = link;
                return (
                  <div
                    className="link-head py-1 text-center opacity my-1 "
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {icon}
                    <Link
                      to={url}
                      className=" light font-16 px-3  dark"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Mobile;
