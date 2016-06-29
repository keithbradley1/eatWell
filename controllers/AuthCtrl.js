angular.module('myApp')
  .controller('LoginCtrl', function ($location, AuthFactory, FirebaseFactory, PostFactory, $timeout)
     {
    const auth = this // auth is controllerAS
    auth.heading = 'login or create a user';
    auth.user = {};
    // auth.login = function () {
    //   FirebaseFactory.login(auth.email, auth.password)
    // }

    // auth.register = function () {
    //   FirebaseFactory.register(auth.email, auth.password)
    // }
    // auth.logout = function () {
    //   FirebaseFactory.signOut(auth.email, auth.password)
    // }
    auth.confirm = () => {
      console.log("fire login function from AuthCtrl.js", auth.email, auth.password);
      AuthFactory.login(auth.user.email, auth.user.password)
        .then(user => {
          PostFactory.setUserId(user.uid);
          $location.path("/search");
          $timeout();
        }).catch(alert);
      }
  })
