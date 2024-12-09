import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

Modal.setAppElement("#root");

const ImageCarouselPopup = (images, setModalOpen) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    
      <Modal
        isOpen={true}
        onRequestClose={() => setModalOpen(false)}
        style={{
          content: {
            maxWidth: "600px",
            margin: "auto",
            padding: "20px",
            textAlign: "center",
          },
        }}
      >
        <h2>Image Carousel</h2>
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Slide ${index}`} style={{ width: "100%" }} />
            </div>
          ))}
        </Slider>
        <button onClick={() => setModalOpen(false)} style={{ marginTop: "20px" }}>
          Close
        </button>
      </Modal>
  );
};

export default ImageCarouselPopup;
