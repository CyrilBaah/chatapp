const express = require('express');
const app = express();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(express.json());


exports.postSign = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        if (!(username && email && password)) {
            res.status(400).json("All input is required");
        }
        const oldUser = await User.findOne({ where: { email } });
        if (oldUser) {
            res.status(409).json("User Already Exist. Please Login");
        } else {
            encryptedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                username,
                email,
                password: encryptedPassword,
            });

            const token = jwt.sign(
                { userId: user.id, email },
                process.env.TOKEN_KEY,
                {
                expiresIn: "2h",
                }
            );
            user.token = token;

            await user.save();
            res.redirect('/chat');
            // return res.render('chat/index', {
            //     title: 'ChatApp | Chat page',
            //     path: '/chat'
            // });
            res.status(201).json({ success: true, message: user});
        }
        
    } catch (error) {
        console.log(error);
        res.status(404).json({ success:false, message: error });
    }
}

exports.postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send("All input is required");
        }

        const user = await User.findOne({ where: { email } });
        if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
            { userId: user.id, email },
            process.env.TOKEN_KEY,
            {
            expiresIn: "2h",
            }
        );

            user.token = token;
            await user.save();

            res.status(200).json({ success: true, message: user });
        }

        res.status(400).json( {success: false, message: "Invalid Credentials"});
    } catch (error) {
        console.log(error);
        await res.status(404).json( {success: false, message: error});
    }
};

exports.getLogin = (req, res) => {
    res.render('auth/login', {
        title: 'ChatApp | Login',
        path: '/login',
    })
};

exports.getSignup = (req, res) => {
    res.render('auth/signup', {
        title: 'ChatApp | Signup',
        path: '/signup',
    })
};

