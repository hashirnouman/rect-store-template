import React from "react";
import style from "./css/Login.module.css";
import { AiFillHome } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "2rem", color: "#388087" }}>
        <Link to="/">
          <AiFillHome />
        </Link>
        <div className={style.flex}>
          <div className={style.title}> Login</div>
          <div className={style.input}>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className={style.input}>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className={style["button-div"]}>
            <button className={style.button} type="submit">
              {" "}
              Login
            </button>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Login;
