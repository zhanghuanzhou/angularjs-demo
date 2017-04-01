angular.module('my-components')
.directive('selectPanel',[function(){
    	return {
	        scope: {
	        	width: "@",
	        	size: "@",
	            options: '=',
	            onChanged: '&'
	        },
	        restrict: 'E',
	        controller:['$scope',function($scope){
	        	$scope.lastSelectedOption = null;

	        	$scope.clickEvent = function(option){
	        		if(option != $scope.lastSelectedOption){
	        			$scope.onChanged(getValue(option), getValue(option));
	        			$scope.lastSelectedOption = option;
	        		}
	        	}

	        	function getValue(option){
	        		if(option == null){
	        			return null;
	        		}
	        		if (angular.isObject(option)){
	        			return option.value;
	        		} else {
	        			return option;
	        		}
	        	}
	        }],
	        template: '<div class=\"select-panel\" ng-style=\"{width:width!=null?width:\'auto\',height:size!=null?(size*25)+\'px\':\'auto\'}\"><ui><li ng-repeat=\"option in options track by $index\"ng-click=\"clickEvent(option)\"ng-class=\"{active:option==lastSelectedOption}\">{{option.text!=null?option.text:option}}</li></ui></div>'
	    	
		}
    }]) ;  