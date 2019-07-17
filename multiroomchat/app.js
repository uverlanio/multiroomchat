/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar porta de escuta */
var server = app.listen(80, function(){
    console.log('Servidor online');
})

var io = require('socket.io').listen(server);

// var global
app.set('io',io);
/* criar conexão por websocket */
io.on('connection',function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect',function(){
		console.log('Usuário desconectou');
	});
});