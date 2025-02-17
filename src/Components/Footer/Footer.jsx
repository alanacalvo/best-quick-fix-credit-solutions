import React from "react";
import "./Footer.scss";
import logo from "./logo.jpg";

function Footer() {
  return (
    <footer>
      <div className="white-space"></div>
      <div className="copyright">
        <img src={logo} alt="logo" className="logo" />
        <p>
          © Copyright 2017. Quick Fix Credit Solutions. All rights reserved.
        </p>
        <div>
          <a href="_blank">Terms of Service</a> |{" "}
          <a href="_blank">Privacy Policy</a>
        </div>
      </div>
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>Mon-Sat 9am-7pm</p>
        <p>877-987-8425</p>
        <p>info@quickfixcreditsolutions.com</p>
        <p>7210 N Grand Parkway W Suite C </p>
        <p>Spring, TX 77379</p>
      </div>
    </footer>
  );
}

export default Footer;
