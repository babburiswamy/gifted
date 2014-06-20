(function(angular, app) {
    var module = angular.module('myapp', []);
    module.directive('draggable', function () {
	return {
	    alert("")
	    restrict: 'A',
	    link: function (scope, element, attrs) {
		element[0].addEventListener('dragstart', scope.handleDragStart, false);
		element[0].addEventListener('dragend', scope.handleDragEnd, false);
	    }
	}
    });
    
    module.directive('droppable', function () {
	return {
	    restrict: 'A',
	    link: function (scope, element, attrs) {
		element[0].addEventListener('drop', scope.handleDrop, false);
		element[0].addEventListener('dragover', scope.handleDragOver, false);
	    }
	}
    });
    
    function MainController($scope)
    {
	$scope.drag_types = [
            {name: "Blue"},
            {name: "Red"},
            {name: "Green"},
	];
	$scope.items = [];
	
	$scope.handleDragStart = function(e){
            this.style.opacity = '0.4';
            e.dataTransfer.setData('text/plain', this.innerHTML);
	};
	
	$scope.handleDragEnd = function(e){
            this.style.opacity = '1.0';
	};
	
	$scope.handleDrop = function(e){
            e.preventDefault();
            e.stopPropagation();
            var dataText = e.dataTransfer.getData('text/plain');
            $scope.$apply(function() {
		$scope.items.push(dataText);
            });
            console.log($scope.items);
	};
	
	$scope.handleDragOver = function (e) {
            e.preventDefault(); // Necessary. Allows us to drop.
            e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
            return false;
	};
	
	
    }
})(angular, myApp);
