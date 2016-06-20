"use strict"

angular.module('myApp', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/post-page', {
        controller: 'PostCtrl',
        controllerAs: 'post',
        templateUrl: '/partials/post-page.html'
      })
      .when('/', {
        controller: 'restaurantController',
        controllerAs: 'search',
        templateUrl: '/'
      })
      .otherwise('/')
    })
  .controller('restaurantController', function($scope, $http){
    const search = this;

    search.heading = 'find a restaurant';

    $scope.fetch = function (){
      console.log("click")
     $http.get(`https://api.foursquare.com/v2/venues/search?client_id=DADTEOVA0EOTGPS4X5A3IJK3FQCVDK5O5CQ4OF3N1KBWQVBM&client_secret=P2VTMNQVH1OPBK0VXIFQIOMFWZPBR4SAPZXYSUBEULLLVIMU&v=20130815&near=${$scope.near}&query=${$scope.name}`)
      .then(function(response){ $scope.details = response; console.log($scope.details) });
    };
  .controller('PostCtrl', function($scope, $http) {
    const post = this;
    post.heading = 'create a post'

  })



