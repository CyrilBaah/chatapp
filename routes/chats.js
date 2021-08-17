const express = require('express');
const router = express.Router();
const chatsController = require('../controllers/chatsController');


router.get('/chats', chatsController.getIndex);


module.exports = router;

