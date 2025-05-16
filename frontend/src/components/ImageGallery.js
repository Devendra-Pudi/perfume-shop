

// src/components/ImageGallery.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ImageGallery.css'; // Optional: create this file for custom styles

const ImageGallery = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100" // Make image full width
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ height: '400px', objectFit: 'cover' }} // Set height and fit
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageGallery;
