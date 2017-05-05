const path = require('path');
const express = require('express');
const app = express();
const MainRouter = require(path.join(__dirname, 'routers', 'MainRouter'));

var GradientApp = {};
var port = 3000;

GradientApp.startApp = function() {
	app.set('view engine', 'pug');
	app.set('views', path.join(__dirname, 'views'));

	app.listen(port, function() {
		console.log('App listening on port ${port}');
	});

	app.get('/', function(req, res) {
		 res.end('Hello World');
	});
};


console.log('Hello World');



module.exports = GradientApp;