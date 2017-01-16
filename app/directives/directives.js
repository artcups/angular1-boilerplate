/**
 * Created by Marcus on 2017-01-16.
 */

( function () {
    var app = angular.module("app");

    app.directive('toggleactive', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.bind('click', function () {
                    $(element).closest('.menu').find('.active').removeClass('active');
                    element.addClass('active');
                })
            }
        }
    });
}());