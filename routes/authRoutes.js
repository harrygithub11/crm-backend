const express = require('express');
const { login, signup } = require('../controllers/authController');
const router = express.Router();

// Ensure the login route is defined as POST
router.post('/login', login);
router.post('/signup', signup);

module.exports = router;