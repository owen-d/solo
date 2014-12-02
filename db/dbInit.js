var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

  // yay!
  var Schema = mongoose.Schema;

  var jobSchema = new Schema({
    title: String,
    offer: Number,
    date: { type: Date, default: Date.now }
  });

  var Job = mongoose.model('Job', jobSchema);


  var finder = function(){
    Job.find(function(err, models){
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











//-------------------------------------------------------------------------------------------
module.exports = {
  db: db,
  find: finder
};