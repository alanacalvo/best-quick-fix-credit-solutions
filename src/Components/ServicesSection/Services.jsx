import React from "react";
import "./Services.scss";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";

function Services() {
  return (
    <section className="services">
      <div className="title">
        <h1>Quick Consultation</h1>
        <h2>
          Our Goal is to Get You Back On Track & Give You The Right Tools To
          Achieve Your Dreams!
        </h2>
      </div>
      <h3>SERVICES</h3>
      <div className="card-div">
        <div className="cards">
          <img src={card1} alt="" />
          <div className="text">
            <h2>FREE</h2>
            <h2>Credit Coaching</h2>
            <p>
              Have a quick question about Credit in general? Book a Free Credit
              Consultation to gain a clear perspective of what the professionals
              are doing to leverage or build their credit.
            </p>
          </div>
        </div>
        <div className="cards">
          <img src={card2} alt="" />
          <div className="text">
            <h2>FREE</h2>
            <h2>Credit Consultation</h2>
            <p>
              You're not the only one who didn't learn about how to manage your
              Credit during school. Good news it is never too late to start
              learning on how to build your credit so you too can achieve your
              financial dreams.
            </p>
          </div>
        </div>
        <div className="cards">
          <img src={card3} alt="" />
          <div className="text">
            <h2>FREE</h2>
            <h2>Credit Analysis</h2>
            <p>
              We offer Free Credit Analysis to help provide a better
              understanding what the first steps are to see what is ACTUALLY
              needed to improve your credit score. Everyone's situation is
              unique so let's make a game plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
