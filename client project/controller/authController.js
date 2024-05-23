const User = require('../models/user');

exports.showSignupPage = (req, res) => {
  res.sendFile('signup.html', { root: './client' });
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send('Email already exists');
    }

    const user = new User({ name, email, password });
    await user.save();
    res.send('Signup successful');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.showSigninPage = (req, res) => {
  res.sendFile('signin.html', { root: './client' });
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).send('Invalid email or password');
    }

    // Here you can set cookies
    res.send('Signin successful');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
