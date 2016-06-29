angular.module('myApp')
  .factory('FirebaseFactory', ($location, $timeout) => {
    const db = firebase.database();
    const postsRef = db.ref("posts");
    const usersRef = db.ref("users");

    let currentUser = null
    // Listener that fires route to search-page on logout or login state of change
    firebase.auth().onAuthStateChanged(function(user) {
      console.log("fired state of change function on FirebaseFactory.js");
      if (user) {
        currentUser = user;
        $location.path('/search');
        $timeout()
      } else {
        currentUser = null;
        $location.path('/');
        $timeout()
      }
    });

    return {
      getUser: () => currentUsr,

      // getPin: id => db.ref(`pins/${id}`).once("value").then(snapshot => snapshot.val()),
      // listenPins: listener => pinsRef.on("value", snapshot => listener(snapshot.val())),
      // postPin: pin => $timeout().then(() => {
      //   const newKeyId = pinsRef.push().key;
      //   pinsRef.update({[newKeyId]:pin});
      // }),
      // deletePin: id => pinsRef.child(id).remove(),

      getPost: id => db.ref(`posts/${id}`).once("value").then(snapshot => snapshot.val()),
      listenPosts: listener => postsRef.on("value", snapshot => listener(snapshot.val())),
      postPost: post => $timeout().then(() => {
        const newKeyId = postsRef.push().key;
        postsRef.update({[newKeyId]:post});
      }),
      deleteUserPosts: id => postsRef.child(id).remove()
    };



      // returning currentUser so it can be accessed through 'FirebaseFactory' in other files
})

    // return {
    //   // register function
    //   register (email, password) {
    //     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    //       // Handle Errors here.
    //       console.log("Error via register function", error.message);
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //     });
    //   },
    //   // login function
    //   login (email, password) {
    //     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //       // Handle Errors here.
    //       console.log("Error via login function", error.message);
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //     });
    //   },
      // logout (email, password) {
      //   firebase.auth().signOut().catch(function(error) {
      //     // Handle Errors here.
      //     console.log("Error via logout function", error.message);
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //   });
      // },


    // }






