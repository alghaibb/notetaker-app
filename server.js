// Import the required modules
const express = require('express'); // Import Express framework

const htmlRoutes = require('./routes/html-routes'); // Import HTML routes

const apiRoutes = require('./routes/api-routes'); // Import API routes

const app = express(); // Create an Express application instance

const PORT = process.env.PORT || 3000; // Set the port number, use environment variable or default to 3000

// Middlewares for handling different types of data and requests

// Middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing application/json
app.use(express.json());

// Middleware to serve static files from 'public' directory
app.use(express.static('public'));

// Set up routes for the application

app.use(htmlRoutes); // Use the imported HTML routes for the application

app.use(apiRoutes); // Use the imported API routes for the application

// Start the server
app.listen(PORT, () => {

  // Callback to be run when the server starts

  // Log the server start message
  console.log(`Server running on http://localhost:${PORT}`);
});
