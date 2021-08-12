const express = require('express');
const app = express();
app.use(express.json());
const { User } = require('../models');


exports.getFriendRequests = async (req, res) => {
    const authToken = await req.cookies['jwt'];
    const users = await User.findAll();
    users.forEach(user => {
        if(user.token === authToken){
            res.render('friends/friendrequests', { 
                title: 'ChatApp | Friend Requests',
                path: '/friendrequests',
                isAuthenticated: authToken,
                username: user.username
            });
        }
    }); 
};

exports.getMakeFriends = async (req, res) => {
    const authToken = await req.cookies['jwt'];
    const users = await User.findAll();
    users.forEach(user => {
        if(user.token === authToken){
            res.render('friends/makefriends', { 
                title: 'ChatApp | Friend Requests',
                path: '/makefriends',
                isAuthenticated: authToken,
                username: user.username
            });
        }
    }); 
};





