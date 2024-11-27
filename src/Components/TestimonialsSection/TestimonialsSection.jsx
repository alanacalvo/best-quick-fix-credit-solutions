import React from "react";
import "./TestimonialsSection.scss";
import { testimonials } from "./testimonialsData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const TestimonialsSection = () => {
  return (
    <section className="testimonial-container">
      <div className="title">
        <h1>Testimonials</h1>
        <p>What members are saying.</p>
      </div>
      <div className="slider-container">
        <Splide options={{ perPage: 1 }}>
          {testimonials.map((testimonial) => (
            <SplideSlide key={testimonial.id}>
              <div className="content">
                <p className="text">{testimonial.text}</p>
                <div className="info">
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                  <p className="user">{testimonial.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default TestimonialsSection;
