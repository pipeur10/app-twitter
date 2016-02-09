// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// angular.module('starter', ['ionic'])
angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      controller: 'WelcomeController',
      templateUrl: 'views/welcome/welcome.html'
    })
    .state('signup', {
      url: '/signup',
      controller: 'SignupController',
      templateUrl: 'views/signup/signup.html'
    })
    .state('login', {
      url: '/login',
      controller: 'LoginController',
      templateUrl: 'views/login/login.html'
    })
    .state('add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'views/add/add.html'
    })
    .state('list', {
      url: '/list',
      cash: false,
      controller: 'ListController',
      templateUrl: 'views/list/list.html'
    })
    .state('profile', {
      url: '/profile',
      controller: 'ProfileController',
      templateUrl: 'views/profile/profile.html'
    });
  try {
    var current=angular.fromJson(localStorage.getItem('currentUser'));
    if(current){
      $urlRouterProvider.otherwise('/list');
    }
    else $urlRouterProvider.otherwise('/welcome');
  }
  catch(e){
      $urlRouterProvider.otherwise('/welcome');
  }
 // $urlRouterProvider.otherwise('/welcome');

})
// .factory('User', function () {
//     return { userName: '' };
// });


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

