var express = require('express');
var socket = require('socket.io');

// App
var app = express();

var server = app.listen(4000, function() {
  console.log('listening to requests on port 4000!!!');
});

// Static files
app.use(express.static('public'));

// socket setup
var io = socket(server);

io.on('connection', function(socket) {
  console.log('made socket connection', socket.id);

  // handle chat event
  socket.on('chat', function(data) {
    // emit data on all sockets
    io.sockets.emit('chat', data);
  });

  // listen for typing event
  socket.on('typing', function(data) {
    socket.broadcast.emit('typing', data);
  });
});
