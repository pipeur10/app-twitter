angular.module('App')
.controller('LoginController', function ($scope, $http, $state,$ionicLoading) {
  $scope.autUser = {
    password: '',
    identifier: ''
  };



  $scope.verifyUser=function(){
		$ionicLoading.show();//http://localhost:8080

		// $http.get('http://localhost:8070/users/login/?identifier='+encodeURIComponent($scope.autUser.identifier)
  		$http.get('https://ap-twitter.herokuapp.com/users/login/?identifier='+encodeURIComponent($scope.autUser.identifier)
  											+"&password="+encodeURIComponent($scope.autUser.password)).success(function (data) {
			if(data){
				localStorage.setItem('currentUser', angular.toJson(data));
				// $scope.autUser.identifier=data.userName;
				// $scope.autUser.password=data.password;
				// $scope.user=data;
				$state.go('list');
				$ionicLoading.hide();
				// $ionicLoading.show({
				// template: 'Data= '+JSON.stringify(data),
				// duration: 5000
				// });
			}
			else{
			$ionicLoading.show({
			template: 'Authentification failed, Please check your informations and try again',
			duration: 5000
			});
			}
			
		})
		.error(function(data){
		$ionicLoading.show({
			template: 'Could not Authenticate User. Please try again later.',
			duration: 5000
			});
		})
		;
  }
});