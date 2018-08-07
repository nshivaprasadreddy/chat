var app = angular.module('myapp', ['ngRoute']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
   $locationProvider.hashPrefix('');

   $routeProvider
      .when('/', {
      	templateUrl: './views/login.html'
      })
      .when('/register', {
      	templateUrl: './views/register.html'
      })
      .when('/home', {
        templateUrl: './views/home.html'
      })
      .otherwise({
      	redirectTo: '/'
      });
}]);

app.controller('register', function($scope, $http){
  $scope.msg = "this is from register";
	$scope.name = null;
	$scope.email = null;
	$scope.password = null;

	$scope.register = function(name, email, password){

		var data = {

                    name: name,

                    email: email,

                    password: password

                };



        $http.post('http://localhost/angular/api/register.php', JSON.stringify(data)).then(function (response) {

                if (response.data)
                  $scope.data = response.data;
                  
                  $scope.msg = "Post Data Submitted Successfully!";
          $scope.name = '';
          $scope.email = '';
          $scope.password = '';

                }, function (response) {

                    $scope.msg = "Service not Exists";

                    $scope.statusval = response.status;

                    $scope.statustext = response.statusText;

                    $scope.headers = response.headers();
                    


                });

	}

});
app.controller('login', function($scope,$http,$location){

  $scope.msg = "shiva";
  $scope.email = null;
  $scope.password = null;

  $scope.login = function (email, password) {

    var data = {


      email: email,

      password: password

    };



  


    $http.post('http://localhost/angular/api/login.php', JSON.stringify(data)).then(function (response) {

      if (response.data)
        $scope.data = response.data;
      
      if (response.data[0].status == true) {
        $location.path('/home');
      }else{
        $scope.name = "nnot found";
      }
      

    }, function (response) {

      $scope.msg = "Service not Exists";

      $scope.statusval = response.status;

      $scope.statustext = response.statusText;

      $scope.headers = response.headers();



    });
  }

});