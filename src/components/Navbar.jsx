import React, { useState } from "react";
import "./css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiCartAlt } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ size: "30px", color: "white" }}>
        <div className="navbar">
          <GiHamburgerMenu onClick={showSidebar} />
          <div className="search-bar">
            <input type="text" />
            <FiSearch />
          </div>
          <div className="links">
            <BiCartAlt />
            <div className="nav-links">login</div>
            <div className="nav-links">Signup</div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <AiOutlineCloseCircle onClick={showSidebar} className="cross-icon" />
          <ul>
            <li className="nav-item">
              <a href="">hello</a>
            </li>
            <li className="nav-item">
              <a href="">hello</a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
