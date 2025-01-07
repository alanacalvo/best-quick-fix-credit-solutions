import React from "react";
import "./HowWeCanHelp.scss";

function HowWeCanHelp() {
  const handleFormClick = () => {
    window.open(
      "https://quickfixcreditsolutions.scorexer.com/jsp/custom_form.jsp?tab_id=a1EvUmlBMGIrY1dHSzhMMmI4aitqZz09&affiliate_id=WmtxcnRIUXpGL1lHY1VNQmIySzRwQT09&redirect_url=",
      "_blank"
    );
  };
  return (
    <section className="help">
      <div className="video">
        <iframe
          width="700"
          height="450"
          src="https://www.youtube.com/embed/VqkbWqjj5wg?si=xZkgzvarmtAFlnlY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="copy">
        <h2>How We Can Help</h2>
        <p>
          Quick Fix Credit Solutions will work on your behalf to remove
          inaccurate and unverifiable information that is being reported by all
          three major credit bureaus. We have wide-ranging expertise about how
          all three credit bureaus operate and will utilize our skills to obtain
          the finest results possible.
        </p>
        <div className="bullets">
          <ion-icon name="checkmark-outline"></ion-icon>Foreclosures
        </div>
        <div className="bullets">
          <ion-icon name="checkmark-outline"></ion-icon>Liens
        </div>
        <div className="bullets">
          <ion-icon name="checkmark-outline"></ion-icon>Collections
        </div>
        <div className="bullets">
          <ion-icon name="checkmark-outline"></ion-icon>Late Payments
        </div>
        <div className="bullets">
          <ion-icon name="checkmark-outline"></ion-icon>Charge Offs
        </div>
        <div className="bullets">
          <ion-icon name="checkmark-outline"></ion-icon>Bankruptcies
        </div>
        <div className="bullets">
          <ion-icon name="checkmark-outline"></ion-icon>Reposessions
        </div>
        <div className="bullets">
          <ion-icon name="checkmark-outline"></ion-icon>Judgements
        </div>
        <p>
          All it takes is a little help from a credit repair professional to
          give your credit score a quick fix. We look forward to working with
          you soon!
        </p>
        <div className="button-div">
          <button onClick={handleFormClick} className="button">
            REQUEST FREE CREDIT CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowWeCanHelp;
