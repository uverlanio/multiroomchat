// Nodemon app.js - Inicia o server

var app = require('./config/server');

app.listen(3000, function()
{
	console.log('Server ON');
});