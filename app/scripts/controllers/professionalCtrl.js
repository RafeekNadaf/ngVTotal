'use strict';

/**
 * @ngdoc function
 * @name vtApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Header Controller of the vtApp
 */
vtApp.controller('professionalCtrl',['$scope', '$route', '$log', function ($scope, $route, $log) {
	
	$scope.healthSystemFilter=["Ayurveda","system1","system2","system3"];
	$scope.locationFilter=["location1","location2","location3","location4","location5","location6"];
	$scope.specializationFilter = ["specialization1","specialization2","specialization3","specialization4","specialization5","specialization6"];
	$scope.doctorDetails=[{"name":"Doctor1", "image":"images/doctors/2.jpg", "url":"", "details":"Doctor details are as follows"},
							{"name":"Doctor2", "image":"images/doctors/3.jpg", "url":"", "details":"Doctor details are as follows"},
							{"name":"Doctor3", "image":"images/doctors/4.jpg", "url":"", "details":"Doctor details are as follows"},
							{"name":"Doctor4", "image":"images/doctors/5.jpg", "url":"", "details":"Doctor details are as follows"},
							{"name":"Doctor5", "image":"images/doctors/4.jpg", "url":"", "details":"Doctor details are as follows"}];
	
	$scope.init = function() {
		console.log(" Inside init of product Controller");
	}
	
	$scope.init();
	
}]);
