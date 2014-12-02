var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
  title: String,
  offer: Number,
  date: { type: Date, default: Date.now }
});

var Job = mongoose.model('Job', jobSchema);