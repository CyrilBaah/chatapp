const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const { sequelize } = require('./models')

require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');


// Routes
const indexRoutes = require('./routes/index');

app.use(indexRoutes);



const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    console.log('Database synced!');
});
