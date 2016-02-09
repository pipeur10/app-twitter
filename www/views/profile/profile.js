angular.module('App')
.controller('ProfileController', function ($scope, $http, $state,$ionicLoading) {
  	try {
		$scope.currentUser=angular.fromJson(localStorage.getItem('currentUser'));
	}
	catch(e){

		}  
});