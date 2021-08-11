const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.post('/signup', authController.postSign);
router.post('/login', authController.postLogin);
router.get('/login', authController.getLogin);
router.get('/signup', authController.getSignup);



module.exports = router;
