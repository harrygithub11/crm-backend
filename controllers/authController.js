exports.login = (req, res) => {
    const { email, password } = req.body;
    // Add logic to authenticate user
    res.json({ message: 'Login successful', user: { email } });
};

exports.signup = (req, res) => {
    const { name, email, password } = req.body;
    // Add logic to register user
    res.json({ message: 'Signup successful', user: { name, email } });
};