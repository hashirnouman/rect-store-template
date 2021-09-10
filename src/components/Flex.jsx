import React from "react";
import style from "./css/Flex.module.css";

const Flex = ({children}) => {
  return <div className={style.flex}>{children}</div>;
};

export default Flex;
