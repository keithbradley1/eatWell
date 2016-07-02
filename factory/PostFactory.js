'use strict';
  angular.module('myApp')
    .factory('PostFactory', (FirebaseFactory, setVenueFactory) => {
      let currentUserId = "";

      return {
        setUserId: uid => currentUserId = uid,
        listenPosts: listener => FirebaseFactory.listenPosts(posts => {
          for(const bid in posts) {
            if(posts[bid].uid !== currentUserId) {
              delete posts[bid];
            }
          }
          listener(posts);
        }),
        removePost: postId => FirebaseFactory.deleteUserPosts(postId),
        createPost: newPost =>
          FirebaseFactory.postPost(Object.assign(newPost, {uid:currentUserId}))
      };

  });
