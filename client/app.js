const app = angular.module('app', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when('/dash', {
        templateUrl: 'partials/dash.html'
    })
    .when('/new', {
        templateUrl: 'partials/new.html'
    })
    .when('/edit', {
        templateUrl: 'partials/edit.html'
    })
    .otherwise({
        redirectTo: '/dash'
    })
})
