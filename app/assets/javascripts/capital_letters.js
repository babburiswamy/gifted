(function(angular, app) {
    "use strict";
    app.controller("CapitalController",["$scope",  function($scope) {
	$scope.validate = function(){
	    if ($scope.Akul != "akul")
	    {
		alert("akul")
	    }
	    if ($scope.Dhruv != "dhruv")
	    {
		alert("dhruv")
	    }
	    if ($scope.Mohan != "mohan")
	    {
		alert("Mohan")
	    }
	    if ($scope.Neema != "neema")
	    {
		alert("neema")
	    }
	    if ($scope.Parul != "parul")
	    {
		alert("Parul")
	    }
	    if ($scope.Raman != "raman")
	    {
		alert("raman")
	    }
	    if ($scope.Sonia!= "sonia")
	    {
		alert("Sonia")
	    }
	    if ($scope.Vami != "vami")
	    {
		alert("Vami")
	    }
   else {alert ("All are correct! Good")}
	}
    }]);
})(angular, myApp);	
