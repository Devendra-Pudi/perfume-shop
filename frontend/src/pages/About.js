// src/pages/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <Container className="about-container my-5">
      <Row className="justify-content-center">
        <Col md={8}> {/* Adjust column width for better centering */}
          <h1 className="text-center mb-4 title">About Us</h1>
          <p className="text-center paragraph">
            Welcome to Perfume Shop, your number one source for all things fragrance.
            We're dedicated to providing you the very best of perfumes, with an emphasis
            on quality, customer service, and uniqueness.
          </p>
          <p className="text-center paragraph">
            Founded in 2023, Perfume Shop has come a long way from its beginnings.
            When we first started out, our passion for fragrances drove us to do intense
            research so that Perfume Shop can offer you the world's most advanced
            products.
          </p>
          <p className="text-center paragraph">
            We hope you enjoy our products as much as we enjoy offering them to you.
            If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="text-center paragraph">
            Sincerely,<br />
            <span className="team">The Perfume Shop Team</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
