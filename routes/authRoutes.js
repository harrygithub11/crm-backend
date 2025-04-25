const express = require('express');
const router = express.Router();
const { login, signup } = require('../controllers/authController');

router.get('/test', (req, res) => {
    res.json({ message: 'Auth API is working!' });
});

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;