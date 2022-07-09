const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//Import Routes
const authRoute = require('./routes/auth');


dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECTION , ()=> console.log('connect to DB!'));


const router = require('./routes/auth');

//Middleware
app.use(bodyParser.urlencoded({
    extended: true
}));




//Routes MidleWare
app.use('/api/user', authRoute);

// router.post('/login');


app.listen(3000, ()=> console.log('server is runnning'));