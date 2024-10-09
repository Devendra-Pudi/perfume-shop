// // src/components/ImageGallery.js
// import React, { useState } from 'react';
// import { Image, Row, Col } from 'react-bootstrap';

// function ImageGallery({ images }) {
//   const [mainImage, setMainImage] = useState(images[0]);

//   return (
//     <div>
//       <Image src={mainImage} fluid rounded />
//       <Row className="mt-3">
//         {images.map((img, index) => (
//           <Col key={index} xs={3} onClick={() => setMainImage(img)}>
//             <Image src={img} thumbnail fluid style={{ cursor: 'pointer' }} />
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default ImageGallery;


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
