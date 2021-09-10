import React, { useState } from "react";
import "./css/Sidebar.module.css";
import style from "./css/Sidebar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const ToggleSideBar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div>
      <GiHamburgerMenu onClick={ToggleSideBar} />
      <div className={sidebar ? style.sidebar.active : style.active}>helo</div>
    </div>
  );
};

export default Sidebar;
