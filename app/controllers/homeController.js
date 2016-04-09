'use strict';
var  home  = angular.module('homeController',[]);

home.controller('homeCtrl', ['$scope', function($scope) {
    $scope.hello = 'hello home';
}]);