var express = require('express');
var app = express();

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false}));
app.get('/', function (req, res) {
	// body...
	res.sendFile('index.html');
})
app.post('/submit_data', function (req,res) {
	var name1 = req.body.name;
	var year1 = req.body.year;
	var branch1 = req.body.branch1;
	var prn = req.body.prn;
	res.send(name1 + 'Submitted Successfully');
})

var server = app.listen(5000, function () {
	// body...
	console.log("SERVER IS RUNNING");
})