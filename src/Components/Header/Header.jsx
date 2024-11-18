import React from "react";
import "./Header.scss";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo" className="logo" />

        <p>877-987-8425</p>
        <p className="email">info@quickfixcreditsolutions.com</p>
        <p>Mon - Sat 9am - 7pm</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://quickfixcreditsolutions.scorexer.com/Portal/login.jsp"
          className="login-button"
        >
          Client Login
        </a>
      </header>
    </div>
  );
}

export default Header;
