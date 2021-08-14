const { request } = require('express');
const express = require('express');
const app = express();
app.use(express.json());
const { User, Friendrequest } = require('../models');


exports.getFriendRequests = async (req, res) => {
    const authToken = await req.cookies['jwt'];
    const users = await User.findAll();
    users.forEach(user => {
        if(user.token === authToken){
            res.render('friends/friendrequests', { 
                title: 'ChatApp | Friends Requests',
                path: '/friendrequests',
                isAuthenticated: authToken,
                username: user.username,
                users: users,
                successMessage: req.flash('success')
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
                title: 'ChatApp | Make Friends',
                path: '/makefriends',
                isAuthenticated: authToken,
                username: user.username,
                users: users,
                successMessage: req.flash('success')
            });
        }
    }); 
};

exports.sendRequest = async (req, res) => {
    const authToken = await req.cookies['jwt'];
    const users = await User.findAll();
    users.forEach(user => {
        if(user.token === authToken){
            const { id } = req.params;
            Friendrequest.create({
                userOne: user.id,
                userTwo: id,
                userId: user.id
            });
        req.flash('success', 'Friend Request Sent Successfully');
        res.redirect('/makefriends');
        }
    }); 
};

exports.test = async (req, res) => {
    const friendRequests = await Friendrequest.findAll({ where: { userTwo: 3 }, include : 'user' });
    const a = [];
     friendRequests.forEach(friendrequest => {
            a.push(friendrequest['user'])
        })
        res.json(a)
}
