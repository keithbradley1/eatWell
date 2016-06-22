'use strict';
  angular.module('myApp')
    .factory('PostFactory', function(){
      let venue = null;

      return {
        setVenue: (newVenue) => {
          venue = newVenue;
        },

        getVenue: () => {
          return venue;
        }
      }
  })