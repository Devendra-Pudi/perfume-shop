// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Review = require('../models/Review');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().select('name shortDescription price images');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('reviews');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new review
router.post('/:id/reviews', async (req, res) => {
  try {
    const { username, rating, comment } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const review = new Review({
      product: product._id,
      username,
      rating,
      comment
    });

    await review.save();
    product.reviews.push(review);
    await product.save();

    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
