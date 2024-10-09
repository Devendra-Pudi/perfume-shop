// src/components/ReviewsSection.js
import React, { useState } from 'react';
import { Form, Button, ListGroup, Alert } from 'react-bootstrap';
import axios from 'axios';
import './ReviewsSection.css'; // Import the CSS file

function ReviewsSection({ productId, reviews }) {
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [localReviews, setLocalReviews] = useState(reviews || []);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/products/${productId}/reviews`, {
      username,
      rating,
      comment
    })
    .then(response => {
      setLocalReviews([...localReviews, response.data]);
      setUsername('');
      setRating(5);
      setComment('');
      setMessage({ type: 'success', text: 'Review added successfully!' });
    })
    .catch(error => {
      console.error('Error adding review:', error);
      setMessage({ type: 'danger', text: 'Failed to add review.' });
    });
  };

  return (
    <div>
      <h3>Reviews</h3>
      {message && <Alert variant={message.type}>{message.text}</Alert>}
      <ListGroup className="mb-4">
        {localReviews.map(review => (
          <ListGroup.Item key={review._id}>
            <strong>{review.username}</strong> - {review.rating} / 5
            <p>{review.comment}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h4>Add a Review</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Select 
            value={rating} 
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            {[5,4,3,2,1].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Comment</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
          />
        </Form.Group>
        <Button variant="success" type="submit">Submit Review</Button>
      </Form>
    </div>
  );
}

export default ReviewsSection;
