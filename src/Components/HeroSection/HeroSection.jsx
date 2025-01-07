import React from "react";
import "./HeroSection.scss";
import Hero from "./heropic.jpg";

function HeroSection() {
  const handleFormClick = () => {
    window.open(
      "https://quickfixcreditsolutions.scorexer.com/jsp/custom_form.jsp?tab_id=a1EvUmlBMGIrY1dHSzhMMmI4aitqZz09&affiliate_id=WmtxcnRIUXpGL1lHY1VNQmIySzRwQT09&redirect_url=",
      "_blank"
    );
  };
  return (
    <section>
      <div className="hero">
        <div className="text">
          <h1>Best Quick Fix Credit Solutions</h1>
          <h2>"Let's Give Your Credit a Quick Fix!"</h2>
          <p>
            Quick Fix Credit Solutions is a one-stop-shop for all your credit
            consulting needs. We have helped our clients achieve their goals and
            dreams by providing the best advice, guidance and results necessary
            to succeed with a perfect credit score.
          </p>
          <p>Proudly located in Spring Texas and Greater Houston area.</p>
        </div>
        <div className="image">
          <img src={Hero} alt="" />
        </div>
      </div>
      <div className="divider">
        <h2>
          Discover How With Some Quick Fixes You Can Improve Your Credit
          Score...
        </h2>

        <button onClick={handleFormClick} className="button">
          REQUEST FREE CREDIT CONSULTATION
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
