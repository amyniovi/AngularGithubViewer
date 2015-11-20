
(function () {

    var module = angular.module("githubviewer");

    var MainController = function ($scope, github) {
       
        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onReposComplete, onReposError);
        };

        var onUserError = function (data) {
            $scope.user = null;
            $scope.error = "Oops...could not retrieve this guy...";
        };

        var onReposError = function (data) {
            $scope.reposError = "Could not fetch repos....";
        };

        var onReposComplete = function (data) {
            $scope.repos = data;
           
        };

        $scope.Search = function (username) {
            github.getUser(username)
                .then(onUserComplete, onUserError);
        };

    
    };

    module.controller("MainController", MainController);


})();

