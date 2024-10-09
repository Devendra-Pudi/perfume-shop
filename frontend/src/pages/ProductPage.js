// src/pages/ProductPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import ReviewsSection from '../components/ReviewsSection';
import ImageGallery from '../components/ImageGallery';
import './ProductPage.css'; // Import the new CSS file
import {Facebook, Twitter, Instagram } from 'react-bootstrap-icons';


function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
        if (response.data.availableSizes.length > 0) {
          setSelectedSize(response.data.availableSizes[0]);
        }
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <NavigationBar />
      <Container className="product-page my-5"> {/* Apply product-page class */}
        <Row>
          <Col md={6}>
            <ImageGallery images={product.images} />
          </Col>
          <Col md={6}>
            <h2 className="product-title">{product.name}</h2> {/* Use the new class */}
            <p className="product-description">{product.fullDescription}</p> {/* Use the new class */}
            <h4 className="product-price">${product.price.toFixed(2)}</h4> {/* Use the new class */}
            <Form.Group className="mb-3">
              <Form.Label className="size-label">Available Sizes</Form.Label> {/* Use the new class */}
              <Form.Select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                {product.availableSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <div className="button-container"> {/* Button container for alignment */}
              <Button variant="primary">Add to Cart</Button>
              {/* <ShareButton product={product} className="share-btn" /> Added class for styling */}
              <div className="social-icons text-center mt-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook size={30} color="#3b5998" className="mx-2" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter size={30} color="#00acee" className="mx-2" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram size={30} color="#C13584" className="mx-2" />
                  </a>
                </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="reviews-section"> {/* Wrap reviews section */}
              <ReviewsSection productId={product._id} reviews={product.reviews} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductPage;
