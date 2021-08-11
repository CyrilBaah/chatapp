const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const { sequelize } = require('./models')

require('dotenv').config();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Chat App');
})


const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    console.log('Database synced!');
});
