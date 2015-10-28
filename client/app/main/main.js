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

// angular.module('zenColorApp', ['ngMaterial'])
//   .config(function($mdThemingProvider) {
//     $mdThemingProvider.theme('default')
//       .dark();
//   });
