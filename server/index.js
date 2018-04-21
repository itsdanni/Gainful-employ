const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

//const db = require('./db');
const PORT = process.env.PORT || 8080
const app = express();

module.exports = app;

// loading in keys in dev
//if (process.env.NODE_ENV !== 'production') require('../secrets')

// logging middleware
app.use(morgan('dev'));

// parsing middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// api routes
//app.use('/api', require('./api'));

// load static resources from public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// sends index.html
app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// error logging
app.use((err, req, res, next) => {
		console.error(err);
		console.error(err.stack);
		res.status(err.status || 500).send(err.message || 'Internal Server Error.');
});

app.listen(PORT, () => console.log('server started on 8080!'));




