import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="container">
        <div className="content-wrapper">
          {/* Image moved to left (first in the DOM) */}
          <div className="image-content">
            <img 
              src="/images/innovative-sol.png" 
              alt="Medical Technology Solutions"
              className="solution-image"
            />
          </div>
          
          {/* Text content on right */}
          <div className="text-content">
            <h2>Innovative Solutions</h2>
            <p>
              Welcome to Lyon Technologies, your trusted partner in the medical instrumentation 
              and IT solutions industry. We are dedicated to providing cutting-edge technology 
              and services that enhance healthcare delivery and management.
            </p>
            <p>
              Our innovative solutions are designed to meet the unique needs of healthcare providers, 
              ensuring efficiency, accuracy, and reliability in patient care.
            </p>
            <p>
              With a strong commitment to quality and customer satisfaction, we strive to exceed 
              expectations and set new standards in the medical technology field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;