angular.module('app.services', [])


.factory('dbMethods', function ($http) {

  var data = {};

  var getJobs = function() {
    $http.get('/db/jobs')
      .success(function(jobs){
        data.jobs = jobs;
      })
      .error(function(error) { console.error(error); });
  };

  var getTutors = function(){
    $http.get('/db/tutors')
      .success(function(tutors){
        data.tutors = tutors;
      })
      .error(function(error){ console.error(error); });
  };

  var postJob = function(obj){
    $http.post('/db/jobs', obj)
      .error(function(error){ console.error(error); });
  };

  var postTutor = function(obj){
    $http.post('/db/tutors', obj)
      .error(function(error){ console.error(error); });
  };

  var getMatches = function(){
    $http.get('/db/matches')
      .success(function(matches){
        data.matches = matches;
        // console.log(data.matches);
      })
      .error(function(error) { console.error(error); });
  };

  return {
    data: data,
    getJobs: getJobs,
    getTutors: getTutors,
    postJob: postJob,
    postTutor: postTutor,
    getMatches: getMatches
  }
});