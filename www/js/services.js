angular.module('starter.services', ['ngStorage'])

.service('LoginSrvc',  function($q, users, $http, $localStorage){
  return{
    LoginUser:function(mlogin, mpass){
      var deferred = $q.defer();
      var promise = deferred.promise;
      var successData  = "Success!!!";
      var errorData = "You have error...";
      var my_users = $http.get('js/login_pass.json');
      //var dd = JSON.parse(my_users);
      //console.log(dd.login);
$http.get('js/login_pass.json').success(function(data){
  console.log(data);

      if (mlogin && mpass) {
        angular.forEach(data, function(user){
           console.log(user.login);
          if( (user.login === mlogin) && (user.pass === mpass) ){
            // $localstorage.set('login',  user.login);
             //$localstorage.set('pass',  mpass);
             $localStorage.login = user.login;
             $localStorage.pass = mpass;
             deferred.resolve(successData);
             
          }
          else{
            deferred.reject(errorData);
          }
        })
      };
}).error(function(){})


      
      /*promise.myNotification = function(fn){
        promise.then(fn,fn);
        return promise;
      }*/

      return promise;
    }
  }
})
/*.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])*/


;


