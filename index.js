const express = require('express');

const app = express(); // Create an Express application

// Define the port to listen on
const port = process.env.PORT || 3000; // Use environment variable for flexibility

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for the homepage (/)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Serve the index.html file
});

// Route for a sample API endpoint (`/api/message`)
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' }); // Send a JSON response
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});