import React from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

Modal.setAppElement("#root");

const ImageCarouselPopup = ({images, isOpen, onClose, projectName}) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000,
          },
          content: {
            width: "fit-content",
            height: "75vh",
            maxWidth: "400px",
            
            margin: "auto",
            padding: "20px",
            textAlign: "center",
            borderRadius: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            position: "relative"
          },
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>{projectName}</h2>
        <div style={{ 
          flex: 1,
          position: "relative",
          overflow: "hidden"
        }}>
          <Slider {...sliderSettings}>
            {images.map((src, index) => (
              <div key={index}>
                <img 
                  src={src} 
                  alt={`Slide ${index}`} 
                  style={{ 
                    width: "100%",
                    height: "400px",
                    objectFit: "contain",
                    borderRadius: "7px"
                  }} 
                />
              </div>
            ))}
          </Slider>
        </div>
        <button 
          onClick={onClose} 
          style={{ 
            marginTop: "0px",
            padding: "8px 24px",
            backgroundColor: "#ff4444",
            color: "white",
            border: "none",
            borderRadius: "25px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s ease",
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          ✕
        </button>
      </Modal>
  );
};

export default ImageCarouselPopup;
