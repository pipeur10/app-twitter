angular.module('App')
.controller('ListController', function ($scope, $http, $state,$ionicLoading) {
  	try {


		$scope.currentUser=angular.fromJson(localStorage.getItem('currentUser'));

		$ionicLoading.show();

		$scope.$on('$ionicView.enter',function(){
				// $http.get('http://localhost:8070//tweets/?userId='+encodeURIComponent($scope.currentUser.id))
				$http.get('https://ap-twitter.herokuapp.com/tweets/?userId='+encodeURIComponent($scope.currentUser.id))
				.success(function (data) {
						if(data){
							
							$scope.twits=data;
						
							$ionicLoading.hide();
							// $ionicLoading.show({
							// template: 'Data= '+JSON.stringify(data),
							// duration: 100000
							// });
						}
					else{
					$ionicLoading.show({
					template: 'Loading Failed, Please try again later',
					duration: 5000
					});
				}
		})
		.error(function(data){
		$ionicLoading.show({
			template: 'Could not Load Twits for this user.',
			duration: 5000
			});
		});
		});

			
	  		$scope.doRefresh=function(){
	  			// $http.get('http://localhost:8070//tweets/?userId='+encodeURIComponent($scope.currentUser.id)
	  			$http.get('https://ap-twitter.herokuapp.com/tweets/?userId='+encodeURIComponent($scope.currentUser.id)
	  				)
	  		.success(function (data) {
			if(data){
				
				$scope.twits=data;
				$scope.$broadcast('scroll.refreshComplete');
			}
			else{
			$ionicLoading.show({
			template: 'Loading Failed, Please try again later',
			duration: 5000
			});
			}
			
		})
		.error(function(data){
		$ionicLoading.show({
			template: 'Could not Load Twits for this user.',
			duration: 5000
			});
		});
	};


}
catch(e){

	}  
});