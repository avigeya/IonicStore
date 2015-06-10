angular.module('starter.controllers', [])

.controller('myLoginCtrl', function($scope, LoginSrvc, $ionicPopup){
  $scope.data = {};
  console.log('Start work controller!');
  $scope.keyError = false;
  $scope.ErrorLog = "Invalid login or password. Try again.";  

  $scope.myLogin = function(){

    LoginSrvc.LoginUser($scope.data.username, $scope.data.password).myNotification(function(data){
     
     //alert('Success!');
      console.log(data);
      $scope.keyError = false;
      //$state.go('store',{id:1});*/
    });
  }
})
;
