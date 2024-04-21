const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle POST request to /submit
app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.render('index', { name });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

