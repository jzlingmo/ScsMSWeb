'use strict';
var  settings  = angular.module('settingsController',[]);

settings.controller('settingsCtrl', ['$scope', function($scope) {
    $scope.hello = 'hello settings';
}]);