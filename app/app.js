( function () {
    var app = angular.module('app', ['ngRoute', 'ngTouch', 'ui.bootstrap', 'ngAnimate']);

    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/partials/home.html",
                controller: "HomeController"
            })
            .when("/login", {
                templateUrl:"app/partials/home.html",
                controller: "LoginController"
            })
            .otherwise({redirectTo:"/"});

    });

}());