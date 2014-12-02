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

  var tutorSchema = new Schema({
    name: String,
    score: Number
  });

  var Job = mongoose.model('Job', jobSchema);
  var Tutor = mongoose.model('Tutor', tutorSchema);


  var findModels = function(model){
    model.find(function(err, models){
      if (err) {
        console.log(err);
      }
      console.log(models);
    });
  };

  // var firstJob = new Job({title: 'firstJob', offer: 500});

  // firstJob.save(function(err, firstJob){
  //   if (err) console.log(err);
  // });

var insertModel = function(obj, model){
  var newModel = new model(obj);
  newModel.save(function(err, newModel){
    if (err) console.log(err);
  });
};

var removeModel = function(obj, model){
  model.remove(obj, function(err) { 
       console.log('model removed') 
    });
};













//-------------------------------------------------------------------------------------------
module.exports = {
  db: db,
  findModels: findModels,
  insertModel: insertModel,
  job: Job,
  tutor: Tutor
};