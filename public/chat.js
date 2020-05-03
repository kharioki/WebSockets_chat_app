// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

// emit event when clicked send

btn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

// Listen for events
socket.on('chat', function(data) {
  output.innerHTML +=
    '<p><Strong>' + data.handle + ': </Strong>' + data.message + '</p>';
});
