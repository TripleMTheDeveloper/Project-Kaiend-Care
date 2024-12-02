require('dotenv').config();  // Ensure .env variables are loaded
const express = require('express');
const connectDB = require('./db');  // Import the DB connection function
const cors = require('cors');
const routes = require('./auth');  // Import your routes

const app = express();

// Middleware
app.use(express.json());  // To parse JSON requests
app.use(cors());

// Connect to MongoDB
connectDB();  // Using the connectDB function from db.js

// Routes
app.use('/api', routes);  // Attach auth routes under '/api'

// Root Route (for testing)
app.get('/api', (req, res) => {
  res.send('Welcome to the backend!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


