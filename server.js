var express = require('express');
var app = express();

var W3CWebSocket = require('websocket').w3cwebsocket;

var client = new W3CWebSocket('ws://localhost:6437/v6.json');

client.onerror = function() {
    console.log('Connection Error');
};

client.onopen = function() {
    console.log('WebSocket Client Connected');
    var enableMessage = JSON.stringify({enableGestures: true});
    client.send(enableMessage); // Enable gestures
    client.send(JSON.stringify({focused: true})); // claim focus
};

client.onclose = function() {
    console.log('echo-protocol Client Closed');
};

var mostRecentData;
client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        // console.log("Received: '" + e.data + "'");
        mostRecentData = e.data;
    }
};

app.get('/leap', function (req, res) {
  res.json(JSON.parse(mostRecentData));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
