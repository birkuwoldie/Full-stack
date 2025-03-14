/* Backend (Node.js + Express + MongoDB) */

// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bankRoutes = require('./routes/bankRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api', authRoutes);
app.use('/api', bankRoutes);
app.use('/api', applicationRoutes);

// Start Server
app.listen(port, () => console.log(`Server running on port ${port}`));