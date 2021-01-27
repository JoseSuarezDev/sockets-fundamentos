var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor');
});


// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Leonardo',
    mensake: 'Hi five'
}, function (resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor: ', mensaje);
});