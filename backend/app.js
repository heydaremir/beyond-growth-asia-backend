require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

// Middleware
app.use(cors()); // Mengizinkan koneksi dari React
app.use(bodyParser.json()); // Mendukung JSON payload

// Routes
app.use('/api/email', emailRoutes);
app.use(cors());

// Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:5173', // Alamat frontend
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));