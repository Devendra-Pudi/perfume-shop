// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/Navbar';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './Home.css'; // Import the custom CSS for Home page

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <NavigationBar />
      <Banner />
      <Container id="products" className="my-5">
        <h2 className="text-center mb-4" >Our Products</h2>
        <Row>
          {products.map(product => (
            <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <div className="product-card">
                <ProductCard product={product} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
