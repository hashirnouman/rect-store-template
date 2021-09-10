import React, { useState } from "react";
import style from "./css/Navbar.module.css";
import Sidebar from "./Sidebar";
import { IconContext } from "react-icons";
import { BiSearchAlt } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <nav className={style.navbar}>
      <IconContext.Provider value={{ size: "1.6em" }}>
        <div className={style["logo-section"]}>
          {/* {sidebar && <Sidebar />} */}
          {/* <GiHamburgerMenu
            style={{ cursor: "pointer" }}
            onClick={showSidebar}
          /> */}
          <Sidebar />

          <div className={style.logo}>
            <NavLink to="./" className={style["navbar-brand"]}>
              Logo
            </NavLink>
          </div>
        </div>
        <div className={style["search-section"]}>
          <div>
            <input type="text" id="text" className={style["search-bar"]} />
          </div>
          <BiSearchAlt />
        </div>
        <div className={style["links-section"]}>
          <FaShoppingCart className={style["nav-link"]} />

          <NavLink to="/login" className={style["nav-link"]}>
            Login
          </NavLink>
          <a href="./" className={style["nav-link"]}>
            Sign up
          </a>
        </div>
      </IconContext.Provider>
    </nav>
  );
};

export default Navbar;
