/**
 * Created by aliu_000 on 7/26/2015.
 */
var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($locationProvider, $routeProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: 'partials/index', controller: 'ctrl' })
        .when('/about', { templateUrl: 'partials/about', controller: 'ctrl' })
        .otherwise({redirectTo:'/'});
});

app.controller('ctrl', function($scope){});