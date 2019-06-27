var mysql = require('mysql');

var connMySql = function(){
	console.log('Carregou a conexão com o banco de dados')
	return mysql.createConnection({
			'host':'localhost',
			'user':'root',
			'password':'root',
			'database':'portal_noticias'
		});
}

module.exports = function(){
	console.log('Conectou no banco de dados')
	return connMySql;
}

