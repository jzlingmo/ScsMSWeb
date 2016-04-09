'use strict';
var login = angular.module('loginController', []);

login.controller('loginCtrl', ['$scope', '$rootScope', '$location', '$cookieStore', function ($scope, $rootScope, $location, $cookieStore) {
    $scope.user = {username: '', password: ''};
    $scope.loginError = false;

    //if logined should redirect to main
    if($rootScope.loggedIn){
        $location.path('/home');
    }


    $scope.login = function () {
        if ($scope.user.username == 'admin' && $scope.user.password == 'admin') {
            $rootScope.loggedIn = true;
            $rootScope.user = $scope.user;
            $cookieStore.put('user', $scope.user)
            $location.path('/home');
        } else {
            $scope.loginError = true;
        }

    }

    $scope.logout = function () {
        $cookieStore.remove('user')
        $rootScope.loggedIn = false;
        $location.path('/login');
    }

    // TODO it is real login service using session service

//    $scope.login = function() {
//        console.log($scope.user)
//        $scope.user = SessionService.save($scope.user, function(success) {
//            $rootScope.loggedIn = true;
//            $location.path('/main');
//        }, function(error) {
//            $scope.loginError = true;
//        });
//    };
}]);