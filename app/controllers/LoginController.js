/**
 * Created by Marcus on 2017-01-16.
 */
( function () {

    var app = angular.module("app");

    var LoginController = function($scope) {
        $scope.message = "login page";

    };
    app.controller("LoginController", ["$scope", LoginController]);

}());
