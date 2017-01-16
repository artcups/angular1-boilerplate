/**
 * Created by Marcus on 2017-01-16.
 */
( function () {

    var app = angular.module("app");

    var NavigationController = function($scope) {


        $scope.name = 'World';
        $scope.isCollapsed = true;
    };

    app.controller("NavigationController", ["$scope", NavigationController]);

}());
