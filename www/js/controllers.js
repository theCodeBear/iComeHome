var myApp = angular.module('iComeHome');

myApp.controller('home', ['$scope', function($scope) {
  $scope.working = "Angular is working!";
}]);