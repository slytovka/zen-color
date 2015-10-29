'use strict';
angular.module('zenColorApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });

//   .controller('HelperController', function($scope) {
//   $scope.scroll = 0;
// });
