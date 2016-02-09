angular.module('App')
.controller('SignupController', function ($scope, $http, $state,$ionicLoading) {
  $scope.user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userName: '',
    phoneNumber:''
  };

  $scope.saveUser=function(){

  		var error=false;

  		$ionicLoading.show();

  		$http.get('http://ap-twitter.herokuapp.com/users/userName?userName='+encodeURIComponent($scope.user.userName)).success(function (data) {
			if(data){
				
				$ionicLoading.show({
				template: 'This username already exists',
				duration: 3000
				});
			}
			else{
					// $http.post('http://localhost:8070/users/?userName='+encodeURIComponent($scope.user.userName)
  		$http.post('https://ap-twitter.herokuapp.com/users/?userName='+encodeURIComponent($scope.user.userName)
  											+"&password="+encodeURIComponent($scope.user.password)
  											+"&firstName="+encodeURIComponent($scope.user.firstName)
  											+"&lastName="+encodeURIComponent($scope.user.lastName)
  											+"&email="+encodeURIComponent($scope.user.email)
  											+"&phoneNumber="+encodeURIComponent($scope.user.phoneNumber)
			  											, $scope.user).success(function (data) {
						if(data){
							localStorage.setItem('currentUser', angular.toJson(data));
							$state.go('list');
							$ionicLoading.hide();
						}
						else{
						$ionicLoading.show({
						template: 'Could not save User. Please try again later. Else'+data,
						duration: 3000
						});
						}
						
					})
					.error(function(data){
					$ionicLoading.show({
						template: 'Could not save User. Please try again later.'+data,
						duration: 3000
						});
					})
					;
			}
  		}).error(function(data){
					$ionicLoading.show({
						template: 'An error occured . Please try again later.'+data,
						duration: 3000
						});
			});
	}
});