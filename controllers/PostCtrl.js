'use strict'
angular.module('myApp')
  .controller('PostCtrl', function($scope, $http, PostFactory) {
    const post = this;
    post.heading = 'create a post';
    post.venueName = PostFactory.getVenue();

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

    // post.editing = false;
    // let editKey = null;

    // PostFactory.listenPost(data => {
    //   post.list = data;
    //   $timeout();
    // });

    // post.submit = () => PostFactory.createPost(post.newPost).then(() => post.newPost = null);
    // post.delete = (key) => PostFactory.deletePost(key).then(() => post.newPost = null);
    // post.update = () => PostFactory.updatePost(editKey, post.newPost);
    // post.edit = (key, post) => {
    //   post.editing = true;
    //   editKey = key;
    //   post.newPost = post;
    //   PostFactory.deletePost(key);
    // };

  });


