// seed.js

// Import required modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Import Mongoose models
const Product = require('./models/Product');
const Review = require('./models/Review');

// Define sample products to seed
const products = [
  {
    name: 'Eau de Parfum',
    shortDescription: 'A timeless fragrance.',
    fullDescription: 'Eau de Parfum is a classic scent with notes of jasmine and sandalwood.',
    price: 75.00,
    availableSizes: ['50ml', '100ml'],
    images: [
      'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gV_-U9Cee_aEsGU016KnQbNjYukdumaWiuiRxcgjH39wiUxb_xXcBRR_rIqMa4XDFsw&usqp=CAU'    ]
  },
  {
    name: 'Floral Essence',
    shortDescription: 'Bloom with every spritz.',
    fullDescription: 'Floral Essence offers a bouquet of fresh flowers, perfect for springtime.',
    price: 65.00,
    availableSizes: ['50ml', '100ml'],
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDLwTHJR_mv_loZ482Yo39sXh5dIuO9081Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6VaCas1-pXKH3GqwK7mJUsmLQbahck_Jpb0dWKW0DXGSrdS2m4LdVHTegwClb6EsXyo&usqp=CAU'
    ]
  },
  {
    name: 'Mystic Oud',
    shortDescription: 'Deep and alluring.',
    fullDescription: 'Mystic Oud combines rich oud notes with hints of amber for a captivating aroma.',
    price: 120.00,
    availableSizes: ['50ml', '100ml'],
    images: [
      'https://perfumeuae.com/wp-content/uploads/2024/07/Habit-Rouge-Le-Parfum-1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-FcmkqjP75eniqAyKNRspTC4xvjYnuHXhPL7DH7rHEpSn40vxvIlKB4VfYlCtilCTG0&usqp=CAU'
    ]
  },
  {
    name: 'Citrus Splash',
    shortDescription: 'Fresh and invigorating.',
    fullDescription: 'Citrus Splash brings a burst of lemon and bergamot, perfect for daily wear.',
    price: 55.00,
    availableSizes: ['50ml', '100ml'],
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oYyX7tybZSo8pm0tIRsnuFXGG5CQLcihlmgZLjQv1mCtu8ZnzDzXjXCQNqsYxPmWgIw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5plWi0mvOBsHmY8-LFTTb35qIRWgdRuW1BgEVnyn0SOxExfhK-uMmxjccLVapISjXiw&usqp=CAU'
    ]
  },
  {
    name: 'Amber Nights',
    shortDescription: 'Warm and sensual.',
    fullDescription: 'Amber Nights blends warm amber with vanilla and musk, ideal for evening occasions.',
    price: 85.00,
    availableSizes: ['50ml', '100ml'],
    images: [
      'https://dev.guerlain.com/dw/image/v2/BDCZ_DEV/on/demandware.static/-/Sites-GSA_master_catalog/default/dw7c566db3/Secondary_visuals_2/2021/A&M/AM_SECONDARY-VISUAL_PRODUCT-PAGE_SANTAL-PAO-ROSA.jpg?sw=655&sh=655&sfrm=jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0f6RfvcCKsXEoWigRIKHFVXaP9TXOXQ5HFCH4rBMulg9n_daFEpOkrJsKdN8w5rIK5Y&usqp=CAU'
    ]
  }
];

// Define sample reviews to seed
const reviews = [
  {
    username: 'JaneDoe',
    rating: 5,
    comment: 'Absolutely love this fragrance! It lasts all day.'
  },
  {
    username: 'JohnSmith',
    rating: 4,
    comment: 'Great scent, but the bottle could be nicer.'
  },
  {
    username: 'PerfumeLover',
    rating: 5,
    comment: 'A perfect blend of floral and woody notes.'
  },
  {
    username: 'ScentFanatic',
    rating: 3,
    comment: 'Good fragrance, but a bit too strong for my taste.'
  }
];

// Async function to seed the database
const seedDB = async () => {
  try {
    // Connect to MongoDB using the connection string from .env
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data from Products and Reviews collections
    await Product.deleteMany({});
    await Review.deleteMany({});
    console.log('🗑️ Cleared existing products and reviews');

    // Iterate over each product and save to the database
    for (const prod of products) {
      const product = new Product(prod);
      await product.save();
      console.log(`➕ Added product: ${product.name}`);

      // Optionally, add reviews to each product
      // Here, we're assigning random reviews from the sample reviews array
      const numberOfReviews = Math.floor(Math.random() * reviews.length) + 1; // At least 1 review
      const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
      const selectedReviews = shuffledReviews.slice(0, numberOfReviews);

      for (const rev of selectedReviews) {
        const review = new Review({
          product: product._id,
          username: rev.username,
          rating: rev.rating,
          comment: rev.comment
        });
        await review.save();
        product.reviews.push(review);
        console.log(`   ➕ Added review by ${review.username}`);
      }

      // Save the product with the associated reviews
      await product.save();
    }

    console.log('🎉 Database seeding completed!');
  } catch (error) {
    console.error('❌ Error seeding the database:', error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
    console.log('🔒 MongoDB connection closed');
  }
};

// Execute the seed function
seedDB();
