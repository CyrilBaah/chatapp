const express = require('express');
const router = express.Router();
const friendController = require('../controllers/friendController');
const auth = require('../middleware/auth');


router.get('/friendrequests', auth, friendController.getFriendRequests);
router.get('/makefriends', auth, friendController.getMakeFriends);
router.post('/makefriends/:id',auth, friendController.sendRequest);

router.get('/test', friendController.test)


module.exports = router;

