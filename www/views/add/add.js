angular.module('App')
.controller('AddController', function ($scope, $http, $state,$ionicLoading) {
 
 try {
	$scope.currentUser=angular.fromJson(localStorage.getItem('currentUser'));
  }
  catch(e){
      
  }

  $scope.messageTwit={message:''};

  

  $scope.addTwit=function(){
  		$ionicLoading.show();//localhost:8080
  		// $http.post('http://localhost:8070/tweets/?userId='+encodeURIComponent($scope.currentUser.id)
  		$http.post('http://ap-twitter.herokuapp.com/tweets/?userId='+encodeURIComponent($scope.currentUser.id)
  											+"&message="+encodeURIComponent($scope.messageTwit.message), $scope.messageTwit).success(function (data) {
			if(data){
				$state.go('list');
				$ionicLoading.hide();
			}
			else{
			$ionicLoading.show({
			template: 'Operation Failed',
			duration: 5000
			});
			}
			
		})
		.error(function(data){
		$ionicLoading.show({
			template: 'Could not Save Twit. Please try again later.',
			duration: 5000
			});
		})
		;
  };
  
});