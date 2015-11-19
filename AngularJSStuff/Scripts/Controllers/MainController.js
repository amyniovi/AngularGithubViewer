
(function () {

    var module = angular.module("githubviewer");

    var MainController = function ($scope, github) {

        var onUserComplete = function (data) {
            $scope.user = data;
        };

        var onUserError = function (data) {
            $scope.error = "Oops...could not retrieve this guy...";
        };

        $scope.Search = function (username) {
            github.getUser(username)
                .then(onUserComplete, onUserError);
        };

        $scope.message = "Hey angular...";

    };

    module.controller("MainController", MainController);


})();

