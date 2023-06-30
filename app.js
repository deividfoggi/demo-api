// Express server
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000);

// Simple json response to simulate an api
app.get('/api/devices', function(req, res) {
    var obj = [
        {
            name: 'Device 1',
            type: 'feeder'
        },
        {
            name: 'Device 2',
            type: 'feeder'
        },
        {
            name: 'Device 3',
            type: 'sensor'
        }
    ];
    res.send(obj);
});

app.get('/api/users', function(req, res) {
    var obj = [
        {
            name: 'User 1',
            type: 'User'
        },
        {
            name: 'User 2',
            type: 'User'
        },
        {
            name: 'User 3',
            type: 'Admin'
        }
    ];
    res.send(obj);
});