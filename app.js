// Express server
var express = require('express');
var app = express();
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Simple json response to simulate an api
app.get('/api/devices', function(req, res) {
    console.log('Devices listed');
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
    console.log('Users listed');
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


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});