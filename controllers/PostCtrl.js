'use strict'
angular.module('myApp')
  .controller('PostCtrl', function($scope, $http, PostFactory, setVenueFactory, tagFactory) {
    const post = this;
    post.heading = 'create a post';
    post.venueName = setVenueFactory.getVenue();

    // Listener that fires get user on logout or login state of change
    firebase.auth().onAuthStateChanged(function(user) {
      console.log("fired state of change function on FirebaseFactory.js");
      if (user) {
        post.currentUser = user;
        console.log("user", post.currentUser);

      } else {
        currentUser = null;
      }
    });

    $scope.postVenueName = function(venueName) {
      console.log(venueName);

      post.venueName = venueName
      // console.log(post.venueName );
      // console.log(post );
    };

    posts.goToPost = (postId) => {
      tagFactory.setPostId(postId);
      $location.path("/tag");
    };

    posts.submit = () => PostFactory.createPost(posts.newPost).then(() => posts.newPost = null);
    posts.deletePost = (postId) => PostFactory.removePost(postId);
    posts.editPost = () => {

    };

    PostFactory.listenPosts(data => {
      posts.list = data;
      $timeout();
    });

  });

















