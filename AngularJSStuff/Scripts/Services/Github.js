(function () {
    //get a reference to the ng-app
    var module = angular.module("githubviewer");

    var github = function ($http) {

        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) { return response.data; });
        };
    
        var getRepos = function (user) {
            return $http.get(user.repos_url)
            .then(function (response) { return response.data;});
        };

        //public API obj
        return {
            getUser: getUser,
            getRepos: getRepos
        };

        //register service with angular
        module.factory("github", github)

    };

})();