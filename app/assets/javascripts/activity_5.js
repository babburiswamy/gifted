(function(angular, app) {
    "use strict";
    app.controller("Activity5Controller",["$scope",  function($scope) {
	$scope.validate = function(){
	    if ($scope.shop != "shops")
	    {
		alert("shops")
	    }
	    if ($scope.table != "tables")
		{
		    alert("tables")
		}
	    if ($scope.pillow != "pillows")
	    {
		alert("pillows")
	    }
	    if ($scope.tree != "trees")
		{
		    alert("trees")
		}
	    
	    else {alert ("All are correct! Good")}
	}
    }]);
})(angular, myApp);	

