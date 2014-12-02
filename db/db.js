var mongoose = require('mongoose');
var db = require('./dbInit.js');

var finder = function(model){
  Model.find(function(err, models){
    if (err) {
      console.log(err);
    }
    console.log(models);
  });
};

var firstJob = new Job({title: 'firstJob', offer: 500});

firstJob.save(function(err, firstJob){
  if (err) console.log(err);
});

finder(Job);


module.exports = finder;