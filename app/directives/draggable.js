'use strict';

angular.module('drag',[]).
directive('draggable',function($document){
	var startX=0, startY=0, x=0, y=0;
	return function(scope, element, attr){
		element.css({
			position: 'relative',
			border: '1px solid red',
			backgroundColor: 'lightgrey',
			cursor: 'pointer'
		});

		element.bind('mousedown',function(event){
			//计算初始位置在屏幕上的位置
			startX = event.screenX - x;
			startY = event.screenY - y;
			$document.bind('mousemove',mousemove);
			$document.bind('mouseup',mouseup);
		});

		function mousemove(event){
			//计算与初始位置的偏移量
			y = event.screenY -startY;
			x = event.screenX -startX;
			element.css({
				top: y + 'px',
				left: x +'px'
			});
		}

		function mouseup(){
			$document.unbind('mousemove',mousemove);
			$document.unbind('mouseup',mouseup);
		}
	}
})
