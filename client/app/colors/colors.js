'use strict';

angular.module('zenColorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('colors', {
        url: '/colors',
        templateUrl: 'app/colors/colors.html',
        controller: 'ColorsCtrl'
      });
  });