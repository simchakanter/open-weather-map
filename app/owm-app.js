var owmApp = angular.module('OWMApp', ['ngRoute']);

owmApp.value('owmCities', ['New York', 'Dallas', 'Chicago']);

owmApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl : './home.html',
    controller : 'HomeCtrl'
  })
  .when('/cities/:city', {
    templateUrl: './city.html',
    controller: 'CityCtrl',
    resolve: {
      city: function(owmCities, $route, $location) {
        var city = $route.current.params.city;
        if (owmCities.indexOf(city) == -1) {
          $location.path('/error');
          return;
        }
        return city;
      }
    }
  })
  .when('/error', {
    template : '<p>Error Page Not Found</p>'
  })
  .otherwise({
    redirectTo: '/error'
  });
  // I left out a run method here, as I couldn't figure out the lesson.
  // It appears that its not needed.
});

owmApp.controller('HomeCtrl', function($scope) {
    //empty for now
});

owmApp.controller('CityCtrl', function($scope, city) {
  $scope.city = city;
});