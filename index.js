const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});