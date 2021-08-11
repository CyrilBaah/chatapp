const express = require('express');
const app = express();
app.use(express.json());
const { User } = require('../models');


exports.getFriendRequests = async (req, res) => {
    res.render('friends/friendrequests', { 
        title: 'ChatApp | Friend Requests',
        path: '/friendrequests',
    });
};

exports.getMakeFriends = async (req, res) => {
    res.render('friends/makefriends', { 
        title: 'ChatApp | Make Friends',
        path: '/makefriends',
    });
};





