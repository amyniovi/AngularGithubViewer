
(function () {

    var module = angular.module("githubviewer");

    var MainController = function ($scope) {


        $scope.message = "Hey angular...";

    };

    module.controller("MainController", ["$scope", MainController]);


})();

