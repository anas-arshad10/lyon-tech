import React from 'react';
import Slider from 'react-slick';
import '../styles/testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "Kathleen R.",
    image: "/images/testimonial1.png",
    quote: "Lyon Tech revolutionized our medical IT needs!"
  },
  {
    name: "Jo K.",
    image: "/images/testimonial2.png",
    quote: "Their medical instruments are top-notch!"
  },
  {
    name: "Roland C.",
    image: "/images/testimonial3.png",
    quote: "Lyon Tech's solutions are game-changers!"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <>
      <section className="testimonials">
        <div className="container">
          <h2>Voices of Satisfied Customers</h2>
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <p>"{t.quote}"</p>
                <div className="testimonial-profile">
                  <img src={t.image} alt={t.name} />
                  <span>{t.name}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="mission-section">
        <div className="container mission-wrapper">
          <div className="mission-image">
            <img src="/images/mission.png" alt="Our Mission" />
          </div>
          <div className="mission-text">
            <h2><span className="quote-icon">❝</span> Our Mission</h2>
            <p>
              At Lyon Technologies, we are committed to revolutionizing the medical industry through innovative instrumentation and IT solutions.
              Our mission is to enhance healthcare delivery, improve patient outcomes, and drive efficiency in medical practices.
              We strive to create a healthier world by leveraging technology to bridge the gap between healthcare providers and patients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
