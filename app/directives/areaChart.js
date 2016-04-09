'use strict';

charts = angular.module('charts', [])

charts.directive('areaChart', function () {
    function link(scope, ele, attr) {

        var ele = ele[0]
        var svg = d3.select(ele).append('svg')

        var colors = d3.scale.category20();
        var keyColor = function (d, i) {
            return colors(d.key)
        };
        var chart = nv.models.stackedAreaChart()
            .height(400)
            .showControls(true)
            .useInteractiveGuideline(true)
            .x(function (d) {
                return d[0]
            })
            .y(function (d) {
                return d[1]
            })
            .color(keyColor)
            .transitionDuration(300);
        chart.xAxis.tickFormat(function (d) {
            return d3.time.format('%x')(new Date(d))
        });
        wrapChartData()

        scope.$watch("data", wrapChartData);
        function wrapChartData() {
            var data = scope.data
            svg.datum(data).transition().duration(1000).call(chart)
            nv.utils.windowResize(chart.update);
        }
    }

    return {
        link: link,
        restrict: 'E',
        scope: { data: '='}
    }
})
