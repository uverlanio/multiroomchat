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

		// socket.on - ouve mensagem
	socket.on('disconnect',function(){
		console.log('Usuário desconectou');
	});

	socket.on('msgParaServidor', function(data){
		// socket.emit envia mensagem

		/* dialogos */
		socket.emit('msgParaCliente',
		{apelido : data.apelido, mensagem: data.mensagem}
		);

		// broadcast - faz o que a mensagem enviada pelo servidor, seja replicada para todos os clientes (views do chat)
		socket.broadcast.emit('msgParaCliente',
		{apelido: data.apelido, mensagem: data.mensagem}
		);

		/* Participantes */

		if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
			socket.emit('participantesParaClientes',
			{apelido : data.apelido}
			);

			socket.broadcast.emit('participantesParaClientes',
			{apelido: data.apelido}
			);
		}		
});
});