const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const morgan = require('morgan');

// config 
const {url} = require('./config/db');

// port
const port = process.env.PORT || 9999;

// connect to database
mongoose.connect(url); 

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simulate PUT and DELETE
app.use(methodOverride('X-HTTP-Method-Override'));

// static files
app.use(express.static(`${__dirname}/public`));

// use morgan to log requests to the console
app.use(morgan('dev'));

// route's namespace
app.use('/api', router);

// passing on router to routes
require('./app/routes')(router);

// catch all
app.get('*', (req, res) => {
	res.sendfile('./public/index.html');
});

// listen to a port
app.listen(port, () => console.log(`Listening to port - ${port}`));

// expose app
module.exports = app;