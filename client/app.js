var app = angular.module('app', [
  'ui.router',
  'app.tutors',
  'app.jobs',
  'app.matches',
  'app.services'])

// app.run(function($rootScope) {
//   $rootScope.name = "owen";
// });

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  
    .state('tutors', {
      url: '/tutors',
      templateUrl: 'tutors/tutors.html',
      controller: 'TutorsController'
    })
    .state('jobs', {
      url: '/jobs',
      templateUrl: 'jobs/jobs.html',
      controller: 'JobsController'
    })
    .state('matches', {
      url: '/matches',
      templateUrl: 'matches/matches.html',
      controller: 'MatchesController'
    });



    
    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    // $httpProvider.interceptors.push('AttachTokens');
});




















