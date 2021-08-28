const express = require('express');
const app = express();
app.use(express.json());


exports.getIndex = async (req, res) => {
    res.render('auth/signup', { 
        title: 'ChatApp | Home page',
        path: '/',
        isAuthenticated: req.isAuthenticated,
        errorMessage: req.flash('error'),
        successMessage: req.flash('success')
    });
} ;
