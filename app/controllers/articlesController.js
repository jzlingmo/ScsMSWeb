'use strict';
var articles = angular.module('articlesController', ['ngTable']);

articles.controller('articlesCtrl', ['$scope', '$filter', '$timeout', 'ArticleService',
    function ($scope, $filter, $timeout, ArticleService) {
        console.log(ArticleService)
        //文章列表
        var articles = [];
        var pagination = {};
        //所有选项
        $scope.options = {
            processed: [
                {'value': 'all', 'label': '全部'},
                {'value': 'processed', 'label': '已处理'},
                {'value': 'unprocessed', 'label': '未处理'}
            ],
            dates: [
                {'value': '1D', 'label': '今天'},
                {'value': '1W', 'label': '最近一周'},
                {'value': '1M', 'label': '最近一个月'},
                {'value': '3M', 'label': '最近三个月'},
                {'value': '1Y', 'label': '最近一年'},
                {'value': '', 'label': '全部'}
            ]
        }
        //已选择的值
        $scope.choosed = {
            process: 'all',
            date: '1D'
        };

        ArticleService.getArticles($scope.choosed).success(function (data) {
            articles = data.data
        })


    }]);