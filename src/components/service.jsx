import React from 'react';

const Service = () => {
    const constructions=[
        {
            name: "Designing",
            expertise: "Experienced",
            img:"./assets/checkmark.png"
        },
        {
            name: "Planning",
            expertise: "Experienced",
            img:"./assets/checkmark.png"
        },
        {
            name: "Construction",
            expertise: "Experienced",
            img:"./assets/checkmark.png"
        },
        {
            name: "Building",
            expertise: "Intermediate",
            img:"./assets/checkmark.png"
        },
        {
            name: "Infrastructure",
            expertise: "Experienced",
            img:"./assets/checkmark.png"
        },
        {
            name: "Planning",
            expertise: "Experienced",
            img:"./assets/checkmark.png"
        },
        
    ]
    const hydrolic=[
        {
            name: "Modeling",
            expertise: "Intermediate",
            img:"./assets/checkmark.png"
        },
        {
            name: "Analysis",
            expertise: "Experienced",
            img:"./assets/checkmark.png"
        },
        {
            name: "Construction",
            expertise: "Experienced",
            img:"./assets/checkmark.png"
        },
        {
            name: "Infrastructure",
            expertise: "Experienced",
            img:"./assets/checkmark.png"
        },
    ]
  return (
    <section id="experience">
      <p className="section__text__p1">Explore Our</p>
      <h1 className="title">Services</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Frontend Development Section */}
          <div className="details-container">
            <h2 className="experience-sub-title">Construction Engineering</h2>
            <div className="article-container">
                {constructions.map(item=><article>
                <img
                  src={item.img}
                  alt="icon"
                  className="icon"
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.expertise}</p>
                </div>
              </article>)}
            </div>
          </div>

          {/* Backend Development Section */}
          <div className="details-container">
            <h2 className="experience-sub-title">Hydraulic Engineering</h2>
            <div className="article-container">
                {hydrolic.map(item=> <article>
                <img
                  src={item.img}
                  alt="icon"
                  className="icon"
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.expertise}</p>
                </div>
              </article>)}
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = './#projects')}
      />
    </section>
  );
};

export default Service;
