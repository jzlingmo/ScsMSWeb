'use strict';
var services = angular.module('services', ['ngResource']);

var host = 'http://localhost:1000'
services.factory('ArticleService', ['$http',
    function ($http) {

        this.getArticles = function (filter) {
            return $http.get(host+'/api/articles?' +jsonToUrl(filter));
        }
    }]);



//将键值对转换成url 并过滤为空的字段
function jsonToUrl(json) {
    var params = []
    for (var key in json) {
        if (json[key]) {
            params.push(key + '=' + json[key])
        }
    }
    return params.join('&')
}