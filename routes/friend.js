const express = require('express');
const router = express.Router();
const friendController = require('../controllers/friendController');


router.get('/friendrequests', friendController.getFriendRequests);
router.get('/makefriends', friendController.getMakeFriends);


module.exports = router;

