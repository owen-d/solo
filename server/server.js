var express = require('express');
// var partials = require('express-partials');
var bodyParser = require('body-parser');



var app = express();

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.use(partials());
// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '../../client'));


// app.get('*', function(req, res) {
//   res.sendFile('index.html');
// });

console.log('Server is listening on 3000');
app.listen(3000);