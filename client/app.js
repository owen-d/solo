var app = angular.module('app', [
  'ui.router']);

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
    });
    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    // $httpProvider.interceptors.push('AttachTokens');
})




















