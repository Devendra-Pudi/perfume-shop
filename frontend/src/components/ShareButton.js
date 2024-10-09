// src/components/ShareButton.js
import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

function ShareButton({ product }) {
  const shareUrl = window.location.href;
  const title = encodeURIComponent(`Check out this perfume: ${product.name}`);

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${title}`;
  const instagramShare = `https://www.instagram.com/`; // Instagram doesn't support direct sharing via URL

  return (
    <ButtonGroup className="mt-3">
      <Button variant="primary" href={facebookShare} target="_blank">
        <Facebook /> Facebook
      </Button>
      <Button variant="info" href={twitterShare} target="_blank">
        <Twitter /> Twitter
      </Button>
      <Button variant="danger" href={instagramShare} target="_blank">
        <Instagram /> Instagram
      </Button>
    </ButtonGroup>
  );
}

export default ShareButton;
