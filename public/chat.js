// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// emit event when clicked send

btn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

// keypress event
message.addEventListener('keypress', function() {
  socket.emit('typing', handle.value);
});

// Listen for events
socket.on('chat', function(data) {
  feedback.innerHTML = '';
  output.innerHTML +=
    '<p><Strong>' + data.handle + ': </Strong>' + data.message + '</p>';
});

// show typing message
socket.on('typing', function(data) {
  feedback.innerHTML =
    '<p><em>' + data + ' is typing a message...' + '</em></p>';
});
