module.exports.form_add_noticia = function(application, req, res){
		// inicializando json na view
	res.render('admin/form_add_noticia', {validacao : {}, noticias : {}});
}

module.exports.noticias_salvar = function(application, req, res){

	var moment = require('moment');
	var noticias = req.body;
		
		req.assert('titulo','Título é obrigatório').notEmpty();
		req.assert('resumo','Resumo deve conter de 10 a 100 caracteres.').notEmpty().len(10,100);
		req.assert('autor','Autor é obrigatório').notEmpty();
		var data_noticia = moment(noticias.data, 'YYYYY-MM-DD');
		req.assert('data','Escolha uma data').notEmpty();
		req.assert('noticias','Título é obrigatório').notEmpty();

		var erros = req.validationErrors();

		console.log(erros);

		if(erros || !data_noticia.isValid()){
			res.render('admin/form_add_noticia', {validacao : erros, noticias : noticias});	
			return;
		}

		var connection = application.config.dbConnection();
		var noticiasModel = new application.app.models.NoticiasDAO(connection);

		noticiasModel.salvarNoticia(noticias, function(error, result){
			res.redirect('/noticias');
		});	
}