var myApp = angular.module('iComeHome');

myApp.controller('home', ['$scope', '$http', function($scope, $http) {
  $scope.working = "Angular is working!";
  $scope.users = [];

  $scope.getAllUsers = function() {
    $http.get('/users').success(function (data, status, headers, config) {
      console.log("data: " + data);
      console.log("status: " + status);
      console.log("headers: " + headers);
      console.log("config: " + JSON.stringify(config));
      $scope.users = data.map(function(e) { return e.name; });
    }).error(function(data, status, headers, config) {
      console.log("get request to /users failed");
      console.log("data: " + JSON.stringify(data));
      console.log("status: " + status);
      console.log("headers: " + headers);
      console.log("config: " + JSON.stringify(config));

    });
  };
}]);