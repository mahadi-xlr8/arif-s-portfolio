import React from 'react';

const Profile = () => {
  const openResume = () => {
    window.open('/assets/resume-example.pdf');
  };

  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="/assets/ab.png" alt="Arifur Rahman profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello There!</p>
        <h1 className="title">We're ABBORING</h1>
        <p className="section__text__p2">We build your dream</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={openResume}>
            Projects
          </button>
          <button className="btn btn-color-1" onClick={() => navigateTo('./#contact')}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => navigateTo('https://linkedin.com/')}
          />
          <img
            src="/assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => navigateTo('https://github.com/')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
