var express = require('express');
var bodyParser = require('body-parser');

var User = require('./user');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
