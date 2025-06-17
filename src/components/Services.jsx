import React from 'react';
import '../styles/services.css';

const Services = () => {
  const services = [
    {
      title: "Medical Instrumentation",
      description: "Our Medical instrumentation service ensures precise and reliable results, enhancing patient care and medical procedures.",
      image: "/images/medical.png"
    },
    {
      title: "IT Solutions",
      description: "Our IT Solutions service provides robust and secure systems, optimizing operations in the medical field.",
      image: "/images/it.png"
    },
    {
      title: "Software Development",
      description: "Our Software Development service creates tailored solutions, improving efficiency and productivity in healthcare.",
      image: "/images/software.png"
    }
  ];

  return (
    <>
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-content">
          <h2>Our Services</h2>
          <p className="intro">
            At Lyon Technologies, we offer top-tier services in the Medical Instrumentation 
            and IT solutions industry, ensuring quality and efficiency.
          </p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image} alt={service.title} className="card-top-image" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

     <section className="contact-banner">
        <div className="container">
          <h2>Reach Out to Us Today for Expert Solutions</h2>
          <p>
            Need help with medical instrumentation or IT solutions? Don't hesitate to contact Lyon Technologies. We're here to assist you.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
