'use strict';

angular.module('zenColorApp')
  .service('colorService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      var that = this;

      that.color = [];

      //http call for get
      that.getAll = function () {
         return $http.get('/api/colors/');
      }
  });
