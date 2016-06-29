angular.module("myApp")
  .controller("registerCtrl", function(AuthFactory, PostFactory, $location, $timeout) {
    const auth = this;
    auth.actionLabel = "Register";

    auth.confirm = () =>
      AuthFactory.register(auth.user.email, auth.user.password)
        .then(user => {
          PostFactory.setUserId(user.uid);
          $location.path("/post");
          $timeout();
        }).catch(alert);
  });
