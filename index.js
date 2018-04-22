var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var clients = 0;

server.listen(8001, () => console.log('Server running on port 8001'));

io.sockets.on('connection', function (socket) {
  ++clients;
  console.log('a User connected');
  console.log('Connected users: ' + clients);
  io.sockets.emit('users_count', clients);
  
  socket.on('disconnect', function () {
    --clients;
    console.log('a User disconnected');
    console.log('Connected users: ' + clients);
    io.sockets.emit('users_count', clients);
  });
});
