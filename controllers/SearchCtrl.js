'use strict'
angular.module('myApp')
  .controller('SearchCtrl', function($scope, SearchFactory, PostFactory){
    const search = this;

    search.heading = 'find a restaurant';

    $scope.fetch = function (){
      console.log("click")
      SearchFactory.getAPISearch($scope.name, $scope.near)
      .then(
        function (response) {
          $scope.details = response
          console.log("response", response);
        })
    }
    search.chooseVenue = (restaurant) => {
      PostFactory.setVenue(restaurant);
    }
  })
