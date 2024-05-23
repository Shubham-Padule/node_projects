const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.get('/signup', authController.showSignupPage);
router.post('/signup', authController.signup);
router.get('/signin', authController.showSigninPage);
router.post('/signin', authController.signin);

module.exports = router;
