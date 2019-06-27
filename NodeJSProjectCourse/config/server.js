//Framework Gerenciador de modulos
var express = require('express');

// carrega funcionalidades de uma vez
var consign = require('consign');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// Gerenciador de views
app.set('view engine', 'ejs');

// Set folder views default
app.set('views','./app/views');

app.use(express.static('./app/public'));
// --- utilizados como middleware ---
// Precisa ser utilizando antes do carregamento dos modulos
// parse do post no format de json
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

//carregando rotas e conexao com bd
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models/NoticiasDAO.js')
	.then('app/controllers')
	.into(app);

module.exports = app;