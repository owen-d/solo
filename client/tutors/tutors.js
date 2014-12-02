angular.module('app.tutors', [])


.controller('TutorsController', function ($scope, dbMethods) {
  // angular.extend($scope, Links);
  angular.extend($scope, dbMethods);
  //need name, score

  $scope.getTutors();

});