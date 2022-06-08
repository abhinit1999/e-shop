import React from "react";
import "./style.css";
import logoImg from "./logo.png";

const Header = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logoImg} alt="logoImg" />

       
      </div>
      <div className="navBar">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explor More</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
