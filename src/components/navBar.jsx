import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navigation = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <nav id="desktop-nav" data-aos="fade-down">
        <div className="logo" style={{cursor:"pointer"}}>AB Boring</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">AB BORING</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links" style={{zIndex:999}}>
            <ul>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" onClick={toggleMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
