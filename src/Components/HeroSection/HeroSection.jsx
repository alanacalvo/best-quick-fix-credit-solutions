import React from "react";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <>
      <div className="hero">
        <h1>Best Quick Fix Credit Solutions</h1>
        <h2>"Let's Give Your Credit a Quick Fix!"</h2>
        <p>
          Quick Fix Credit Solutions is a one-stop-shop for all your credit
          consulting needs. We have helped our clients achieve their goals and
          dreams by providing the best advice, guidance and results necessary to
          succeed with a perfect credit score.
        </p>
        <p>Proudly located in Spring Texas and Greater Houston area.</p>
      </div>
      <div className="divider">
        <h2>
          Discover How With Some Quick Fixes You Can Improve Your Credit
          Score...
        </h2>
        <button className="button">BOOK FREE CREDIT CONSULTATION</button>
      </div>
    </>
  );
}

export default HeroSection;
