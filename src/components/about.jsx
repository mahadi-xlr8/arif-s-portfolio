import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <section id="about">
  <p className="section__text__p1">Get To Know More</p>
  <h1 className="title">About Us</h1>
  <div className="section-container about-section-container">
    <div className="section__pic-container" data-aos="fade-right">
      <img
        src="./assets/about-us1.jpg"
        alt="Profile picture"
        className="about-pic"
      />
    </div>
    <div className="about-details-container" data-aos="fade-left">
      <div className="about-containers">
        <div className="details-container">
          <img
            src="./assets/experience.png"
            alt="Experience icon"
            className="icon"
          />
          <h3>Experience</h3>
          <p>
            2+ years <br />
            
          </p>
        </div>
        <div className="details-container">
          <img
            src="./assets/education.png"
            alt="Education icon"
            className="icon"
          />
          <h3>Clients</h3>
          <p>
            100+
            <br />
            Satisfied Clients
          </p>
        </div>
      </div>
      <div className="text-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
          reprehenderit et laborum, rem, dolore eum quod voluptate
          exercitationem nobis, nihil esse debitis maxime facere minus sint
          delectus velit in eos quo officiis explicabo deleniti dignissimos.
          Eligendi illum libero dolorum cum laboriosam corrupti quidem,
          reiciendis ea magnam? Nulla, impedit fuga!
        </p>
      </div>
    </div>
  </div>
  <img
    src="./assets/arrow.png"
    alt="Arrow icon"
    className="icon arrow down-arrow"
    onClick={() => (window.location.href = './#services')}
  />
</section>

    </>
  );
};

export default About;
