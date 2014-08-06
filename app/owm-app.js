var owmApp = angular.module('OWMApp', ['ngRoute']);

owmApp.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl : './home.html',
    controller : 'HomeCtrl'
  }).when('/cities/:city', {
    templateUrl: './city.html',
    controller: 'CityCtrl'
  });
});

owmApp.controller('HomeCtrl', function($scope) {
    //empty for now
});

owmApp.controller('CityCtrl', function($scope, $routeParams) {
  $scope.city = $routeParams.city;
});