const express = require('express');
const app = express();
app.use(express.json());
const { User } = require('../models');


exports.getIndex = async (req, res) => {
    res.render('chat/index', {
        title: 'ChatApp | Chat page',
        path: '/chat',
    });
}





