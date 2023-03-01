var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
// biblio .env
require('dotenv').config()

/* Définition des routes */
const routerUsers = require('./routes/users.route')



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* Se Connecter a mongoose */
    mongoose.connect(process.env.MONGO_URI)
        .then(()=> console.log('DB CONNECTED !'))
        .catch(err => console.log(err.message))


/* Définition des routes */
app.use('/', routerUsers)

module.exports = app;
