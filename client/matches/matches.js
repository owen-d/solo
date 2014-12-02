angular.module('app.matches', [])


.controller('MatchesController', function ($scope, dbMethods) {
  // angular.extend($scope, Links);
  angular.extend($scope, dbMethods);

  $scope.getJobs();
  $scope.getTutors();

 


});