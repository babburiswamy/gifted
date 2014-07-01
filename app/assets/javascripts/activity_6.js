(function(angular, app) {
    "use strict";
    app.controller("Activity6Controller",["$scope",  function($scope) {
	$scope.validate = function(){
	    if ($scope.bench != "benches")
	    {
		alert("benches")
	    }
	    if ($scope.bus != "buses")
		{
		    alert("buses")
		}
	    if ($scope.hero != "heroes")
	    {
		alert("heroes")
	    }
	    if ($scope.bush != "bushes")
		{
		    alert("bushes")
		}
	    
	    else {alert ("All are correct! Good")}
	}
    }]);
})(angular, myApp);	

