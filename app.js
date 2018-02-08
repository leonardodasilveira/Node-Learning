const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Routes that handle requests.
const storageRoutes = require('./api/routes/storage');
const productRoutes = require('./api/routes/product');

//connect to db
mongoose.connect('mongodb+srv://sonekarox:Anc5443611@manducare-zkk4r.mongodb.net/test',
    {
        useMongoClient: true
    }
);

//append headers for CORS purposes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', '*'); //insteade of * you can use verbs eg, GET, POST
        return res.status(200).json({})
    }
    next(); //Don't forget this next so the app continues to run.
});

//console status report
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//manage routes
app.use('/storage', storageRoutes);
app.use('/product', productRoutes);

//handle 404 error
app.use ((req, res, next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
});

//handle every other error
app.use((req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;