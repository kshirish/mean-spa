 angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        
        .when('/cities', {
            templateUrl: 'views/city.html',
            controller: 'CityController'
        });

    $locationProvider.html5Mode(true);

}]);