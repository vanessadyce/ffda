var express = require('express');
var app = express();

// var leapjs = require('leap-0.6.4')
// var leap_plugins = require('leap-plugins-0.1.11.min.js')
// var jquery_file = require('jquery.min')

var Leap = require('leapjs')
// Leap.loop({
//   hand: function(hand){
//     console.log(hand.screenPosition());
//   }
// }).use('screenPosition');

// var controller = new Leap.Controller()
// controller.on("frame", function(frame) {
//   console.log("Frame: " + frame.id + " @ " + frame.timestamp);
// });
//
// var frameCount = 0;
// controller.on("frame", function(frame) {
//   frameCount++;
// });
//
// setInterval(function() {
//   var time = frameCount/2;
//   console.log("received " + frameCount + " frames @ " + time + "fps");
//   frameCount = 0;
// }, 2000);
//
// controller.on('ready', function() {
//     console.log("ready");
// });
// controller.on('connect', function() {
//     console.log("connect");
// });
// controller.on('disconnect', function() {
//     console.log("disconnect");
// });
// controller.on('focus', function() {
//     console.log("focus");
// });
// controller.on('blur', function() {
//     console.log("blur");
// });
// controller.on('deviceConnected', function() {
//     console.log("deviceConnected");
// });
// controller.on('deviceDisconnected', function() {
//     console.log("deviceDisconnected");
// });
//
// controller.connect();
// console.log("\nWaiting for device to connect...");

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
