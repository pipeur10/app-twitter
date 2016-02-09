angular.module('App')
.controller('WelcomeController', function ($scope, $http, $state,$ionicLoading) {
 
 try {
	var current=angular.fromJson(localStorage.getItem('currentUser'));
    if(current){
     // $state.go('list');
    }
    
  }
  catch(e){
      
  }
  
});