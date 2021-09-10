import React from "react";
import style from "./css/Footer.module.css";
import { IconContext } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style["footer-links-div"]}>
        <div>
          <h3>Social Media links</h3>
          <IconContext.Provider
            value={{
              size: "2rem",
              style: { display: "block", margin: "10px" },
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <a href="./">
                <FaFacebookSquare />
              </a>
              <p>helo</p>
            </div>
            <a href="./">
              <FaInstagram />
            </a>
          </IconContext.Provider>
        </div>
        <div>
          <h3>Links</h3>
          <div className={style.links}>
            <a href="./" className={style.links}>
              Lorem, ipsum dolor.
            </a>
          </div>
          <div className={style.links}>
            <a href="./" className={style.links}>
              Lorem, ipsum dolor.
            </a>
          </div>
          <div className={style.links}>
            <a href="./" className={style.links}>
              Lorem, ipsum dolor.
            </a>
          </div>
          <div className={style.links}>
            <a href="./" className={style.links}>
              Lorem, ipsum dolor.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
