// src/components/Banner.js
import React from 'react';
import { Container} from 'react-bootstrap';
import './Banner.css'; // Custom CSS styles

function Banner() {
  return (
    <div className="banner">
      <Container className="text-center text-white">
        <h1 className="banner-title">Discover Your Signature Scent</h1>
        <p className="banner-subtitle">Explore our latest collections and special offers.</p>
      
      </Container>
    </div>
  );
}

export default Banner;
