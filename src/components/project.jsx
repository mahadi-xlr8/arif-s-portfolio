import React, { useState, useEffect } from "react";
import ImageCarouselPopup from "./imageSlider";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
const [openModalIndex, setOpenModalIndex] = useState(null);
  const navigateTo = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const projects=[
    {
        name: "Project 1",
        img: "./assets/project-1.png",
        videoLink:'https://www.youtube.com',
        moreImages:[
            "./assets/project-1.png",
            "./assets/project-2.png",
            "./assets/project-3.png"
        ]
    },
    {
        name: "Project 1",
        img: "./assets/project-2.png",
        videoLink:'https://www.youtube.com',
        moreImages:[
            "./assets/project-1.png",
            "./assets/project-1.png",
            "./assets/project-1.png"
        ]
    },
    {
        name: "Project 1",
        img: "./assets/project-3.png",
        videoLink:'https://www.youtube.com',
        moreImages:[
            "./assets/project-1.png",
            "./assets/project-2.png",
            
        ]
    }
  ]

  return (
    <>
    <section id="projects">
      <p className="section__text__p1">Browse Our Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((item,index) => (
            <div key={index} className="details-container color-container" data-aos="fade-up">
              <div className="article-container">
                <img
                  src={item.img}
                  alt={item.name}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                {item.name}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => setOpenModalIndex(index)}
                >
                  More Image
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => navigateTo(item.videoLink)}
                >
                  Video
                </button>
                <ImageCarouselPopup 
                  isOpen={openModalIndex === index} 
                  onClose={() => setOpenModalIndex(null)} 
                  images={item.moreImages} 
                  projectName={item.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow down-arrow"
        onClick={() => navigateTo("./#contact")}
      />
    </section>
    </>
  );
};

export default Project;
