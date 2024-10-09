// src/components/ProductCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product._id}`);
  };

  return (
    <div className="product-card-container">
      <Card className="product-card" onClick={handleClick}>
        <Card.Img variant="top" src={product.images[0]} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.shortDescription}</Card.Text>
          <Card.Text><strong>${product.price.toFixed(2)}</strong></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
