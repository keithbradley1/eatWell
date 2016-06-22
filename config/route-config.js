"use strict"

angular.module('myApp', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/post-page', {
        controller: 'PostCtrl',
        controllerAs: 'post',
        templateUrl: 'partials/post-page.html'
      })
      .when('/', {
        controller: 'SearchCtrl',
        controllerAs: 'search',
        templateUrl: '/partials/search.html'
      })
      .otherwise('/')
    })





