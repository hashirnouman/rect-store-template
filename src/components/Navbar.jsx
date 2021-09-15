import React, { useState } from "react";
import "./css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiCartAlt } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ size: "30px", color: "white" }}>
        <div className="navbar">
          <GiHamburgerMenu
            onClick={showSidebar}
            style={{ cursor: "pointer" }}
          />
          <div className="search-bar">
            <input type="text" />
            <FiSearch />
          </div>
          <div className="links">
            <BiCartAlt style={{ cursor: "pointer" }} />
            <div className="nav-links">
              <Link to="/login">Login</Link>
            </div>
            <div className="nav-links">
              <Link to="/signup">Signup</Link>
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <AiOutlineCloseCircle
            onClick={showSidebar}
            className="cross-icon"
            style={{ cursor: "pointer" }}
          />
          <ul>
            <li className="nav-item">
              <Link Link to="/">
                hello
              </Link>
            </li>
            <li className="nav-item">
              <Link Link to="/">
                hello
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
