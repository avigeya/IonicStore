// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {

      StatusBar.styleLightContent();
    }
  
    
  });
})



.value('users',   [{
    "login": "Test",
    "pass":  "1234",
    "lastname" : "Testov"
  },
  {
    "login": "Arkadey",
    "pass":  "2222",
    "lastname" : "Testov"
  },
  {
    "login": "As",
    "pass":  "2345",
    "lastname" : "Testov"
  },
  {
    "login": "Den",
    "pass":  "1111",
    "lastname" : "Testov"
  }
])

.value('categories',   [{
    "id":"1",
    "link": "/#/store/1",
    "nameCat": "First category",
    "items": [
      {
        "url_img":"img/short1.png",
        "name_goods": "Goods 1 cat1",
        "price": "200"
      },
      {
        "url_img":"img/short2.png",
        "name_goods": "Goods 2 cat1",
        "price": "200"
      },
      {
        "url_img":"img/short1.png",
        "name_goods": "Goods 3 cat1",
        "price": "200"
      }
    ]
  },
  {
    "id":"2",
    "link": "/#/store/2",
    "nameCat": "Second category",
    "items": [
      {
        "url_img":"img/short2.png",
        "name_goods": "Goods 1 cat2",
        "price": "300"
      },
      {
        "url_img":"img/short1.png",
        "name_goods": "Goods 2 cat2",
        "price": "300"
      },
      {
        "url_img":"img/short2.png",
        "name_goods": "Goods 3 cat2",
        "price": "300"
      }
    ]
  },
  {
    "id":"3",
    "link": "/#/store/3",
    "nameCat": "Third category",
    "items": [
      {
        "url_img":"img/short1.png",
        "name_goods": "Goods 1 cat3",
        "price": "400"
      },
      {
        "url_img":"img/short2.png",
        "name_goods": "Goods 2 cat3",
        "price": "400"
      },
        {
        "url_img":"img/short1.png",
        "name_goods": "Goods 3 cat3",
        "price": "400"
      }
    ]
  },
  {
    "id":"4",
    "link": "/#/store/4",
    "nameCat": "Fourth category",
    "items": [
      {
        "url_img":"img/short2.png",
        "name_goods": "Goods 1 cat4",
        "price": "500"
      },
      {
        "url_img":"img/short1.png",
        "name_goods": "Goods 2 cat4",
        "price": "500"
      },
      {
        "url_img":"img/short2.png",
        "name_goods": "Goods 3 cat4",
        "price": "500"
      }
    ]
  }
])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

$ionicConfigProvider.views.maxCache(0);

  $stateProvider

  // Each tab has its own nav history stack:
/*.state('store', {
      url: '/store/:id',
      templateUrl: 'templates/main.html',
      controller: 'storeCtrl'
  
  })*/
.state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'myLoginCtrl'
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});

