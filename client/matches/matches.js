angular.module('app.matches', [])


.controller('MatchesController', function ($scope, dbMethods) {
  // angular.extend($scope, Links);
  angular.extend($scope, dbMethods);

  // $scope.getJobs();
  // $scope.getTutors();
  $scope.getMatches();
  setTimeout(function(){console.log($scope.data);}.bind($scope), 2000);


});