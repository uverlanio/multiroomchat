var http = require('http');

var server = http.createServer(function(req, res){

	var categoria = req.url;

	if(categoria == '/tecnologia'){
		res.end('<html><body>Portal de tecnologia</html></body>')		
	}else if(categoria == '/moda'){
		res.end('<html><body>Portal de moda</html></body>')
	}else if(categoria == '/beleza'){
		res.end('<html><body>Portal de beleza</html></body>')
	}else{
		res.end('<html><body>Portal de noticias</html></body>')	
	}

	

});

server.listen(3000);