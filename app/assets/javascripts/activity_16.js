(function(angular, app) {
    "use strict";
    app.controller("Activity16Controller",["$scope",  function($scope) {
	$scope.validation = function(){
	    if ($scope.tree != "a tree")
	    {
		alert("a tree")
	    }
	    if ($scope.iron != "an iron box")
		{
		    alert("an iron box")
		}
	     if ($scope.horse != "a horse")
	    {
		alert("a horse")
	    }
	    if ($scope.ring != "a ring")
		{
		    alert("a ring")
		}
	     if ($scope.goat != "a goat")
	    {
		alert("a goat")
	    }
	    else {alert ("All are correct! Good")}
	}
    }]);
})(angular, myApp);	

