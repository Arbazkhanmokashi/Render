const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const rideRoutes = require('./routes/rideRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/rides', rideRoutes);

module.exports = app;
