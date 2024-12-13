require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Alamat frontend
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));
app.use(bodyParser.json()); // Mendukung JSON payload
app.use(express.json()); // Mendukung JSON parsing untuk request body

// Routes
app.use('/api/email', emailRoutes); // Route untuk email
app.use('/api', require('./routes/emailRoutes')); // Sesuaikan path jika berbeda

// Server
const PORT = process.env.PORT || 5000; // Gunakan PORT dari environment variable atau default ke 3000
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});

module.exports = app;