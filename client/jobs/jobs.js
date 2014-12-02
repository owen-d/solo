angular.module('app.jobs', [])


.controller('JobsController', function ($scope, dbMethods) {
  angular.extend($scope, dbMethods);

  // console.log(dbMethods);
  //need title, offer
  $scope.logger = function(){
    console.log($scope.data);
  };


});