const app = angular.module('prepApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/index.html',
            controller: 'indexC',
            controllerAs: 'iC'
        })
        .when('/dash', {
            templateUrl: '/partials/dash.html',
            controller: 'dashC',
            controllerAs: 'hC'
        })
        .otherwise({
            redirectTo: '/'
        })
})
