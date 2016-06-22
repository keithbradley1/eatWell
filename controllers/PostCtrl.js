'use strict'
angular.module('myApp')
  .controller('PostCtrl', function($scope, $http, PostFactory) {
    const post = this;
    post.heading = 'create a post';
    post.venueName = PostFactory.getVenue();

    $scope.postVenueName = function(venueName) {
      console.log(venueName);

      post.venueName = venueName
      // console.log(post.venueName );
      // console.log(post );
    };

  });


