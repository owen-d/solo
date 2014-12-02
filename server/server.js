var express = require('express');
var mongoose = require('mongoose');
// var partials = require('express-partials');
var db = require('../db/dbInit.js');
var bodyParser = require('body-parser');



var app = express();

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.use(partials());
// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/db/jobs', function(req, res){
  // db.insertModel(req.body.job, db.job);
  // db.findModels(db.job);
  
  res.end();
});
app.post('/db/jobs', function(req, res){
  //save for later

  res.end();
});

app.get('/db/tutors', function(req, res){
  //placeholder

  res.end();
});
app.post('/db/tutors', function(req, res){
  //placeholder

  res.end();
});

app.use(express.static(__dirname + '../../client'));
app.use('*', function(req, res){
  res.redirect('/');
});
//------------ROUTING------------------------------------------------------------------------





// app.get('*', function(req, res) {
//   res.sendFile('index.html');
// });

console.log('Server is listening on 3000');
app.listen(3000);


mongoose.connect('mongodb://localhost/jobColl');

module.exports = app;