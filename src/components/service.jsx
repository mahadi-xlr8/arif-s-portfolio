import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const services = [
    {
      name: "Deep Tube Well Installation",
      description: "Installation of any size any depth deep tube wells all over Bangladesh. We ensure quality installation with modern equipment.",
      img: "./assets/tube-well.png"
    },
    {
      name: "Submersible Pump Service",
      description: "Expert installation and maintenance of submersible pumps. We provide 24/7 support for emergency repairs.",
      img: "./assets/pump.png"
    },
    {
      name: "Tube Well Maintenance",
      description: "Professional tube wells washing and jetting services to ensure optimal performance and longevity.",
      img: "./assets/maintenance.png"
    },
    {
      name: "Professional Design Services",
      description: "DPHE & BUET certified tube well designs. Our experts ensure compliance with all safety standards.",
      img: "./assets/design.png"
    },
    {
      name: "Water Parameter Testing",
      description: "Comprehensive water quality testing services to ensure safe and clean water supply.",
      img: "./assets/water.png"
    },
    {
      name: "Material Supply",
      description: "One-stop solution for all tube well materials. We supply high-quality components at competitive prices.",
      img: "./assets/supply.png"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">Providing Quality Water Solutions Since 2020</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">
                <img src={service.img} alt={service.name} />
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <button className="learn-more-btn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}>Hire Us</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
