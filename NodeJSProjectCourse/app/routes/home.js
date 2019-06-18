module.exports = function(application){

// requisição no browser
	application.get('/', function(req, res){
		application.app.controllers.home.index(application,req,res);
	});
};