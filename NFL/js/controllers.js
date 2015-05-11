var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/nflteams.json').success(function(data) {
    $scope.teams = data;
    $scope.teamOrder = 'team';
  });
}]);

