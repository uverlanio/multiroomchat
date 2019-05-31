module.exports = function(app){

// requisição no browser
	app.get('/', function(req, res){
	// carregando arquivo EJS, que contém o html
		res.render('home/index');
	});
}