import React from "react";
import style from "./css/Login.module.css";
import { AiFillHome } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "2rem", color: "#388087" }}>
        <Link to="/">
          <AiFillHome />
        </Link>
        <div className={style.flex}>
          <div className={style.title}> Sign up</div>
          <form action="">
            <div style={{ display: "flex" }}>
              <div className={style["flex-input"]}>
                <input type="name" placeholder="Enter your First name" />
              </div>
              <div className={style["flex-input"]}>
                <input type="name" required placeholder="Enter Last Name" />
              </div>
            </div>
          </form>
          <div className={style.input}>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div style={{ display: "flex" }}>
            <div className={style["flex-input"]}>
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className={style["flex-input"]}>
              <input type="password" placeholder="Confirm your password" />
            </div>
          </div>
          <div className={style["button-div"]}>
            <button className={style.button} type="submit">
              {" "}
              Sign up
            </button>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Signup;
