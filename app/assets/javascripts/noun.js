(function(angular, app) {
    "use strict";
    app.directive('draggable', function () {
	return {
	    restrict: 'A',
	    link: function (scope, element, attrs) {
		element[0].addEventListener('dragstart', scope.handleDragStart, false);
		element[0].addEventListener('dragend', scope.handleDragEnd, false);
	    }
    }
    });
    
    app.directive('droppable', function () {
	return {
	    restrict: 'A',
	    link: function (scope, element, attrs) {
		element[0].addEventListener('drop', scope.handleDrop[category], false);
		element[0].addEventListener('dragover', scope.handleDragOver, false);
	    }
	}
    });
    
    app.controller("MainController1",["$scope",  function($scope)
    {

	 $scope.drag_types= [  {name:"lion" , category:"animals"},{name:"cat" , category:"animals"},{name:"zebra" , category:"animals"},{name:"pig" , category :"animals"},{name:"horse", category : "animals"},{name:"dog", category:"animals"}, {name:"pen" , category:"things"}, {name:"ring", category:"things"},{name:"bottle", category:"things"},{name: "box", category:"things"}, {name: "book", category:"things"},{name: "chair", category:"things"},
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
	 if(e == "animals"){
	     var dataText = e.dataTransfer.getData('text/plain');
	     $scope.$apply(function() {
		 $scope.items.push(dataText);}
			  )};
	 console.log($scope.items);
     };

	 $scope.handleDragOver = function (e) {
	     e.preventDefault(); // Necessary. Allows us to drop.
	     e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
	     return false;
	 };
    }]);
})(angular, myApp);	
