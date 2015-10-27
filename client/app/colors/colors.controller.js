'use strict';

angular.module('zenColorApp')
  .controller('ColorsCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.isSubmit = false;
    $scope.color1 = false;
    $scope.color2 = false;
    $scope.color3 = false;
    $scope.colorize = function(color) {
      if (color == 'blue') {
      $scope.myStyle1={'background-color': 'blue'}
      $scope.color1 = true;
       }
      else if(color =='red') {
      $scope.myStyle1={'background-color': 'red'}
      $scope.color1 = true;
       }
      else if(color =='yellow') {
      $scope.myStyle1={'background-color': 'yellow'}
      $scope.color1 = true;
       }
      else if(color =='green') {
      $scope.myStyle2={'background-color': 'green'}
      $scope.color2 = true;
       }
      else if(color =='purple') {
      $scope.myStyle2={'background-color': 'purple'}
      $scope.color2 = true;
       }
      else if(color =='orange') {
      $scope.myStyle2={'background-color': 'orange'}
      $scope.color2 = true;
       }
      else if(color =='black') {
      $scope.myStyle3={'background-color': 'black'}
      $scope.color3 = true;
       }
      else if(color =='white') {
      $scope.myStyle3={'background-color': 'white'}
      $scope.color3 = true;
       }
      else if(color =='brown') {
      $scope.myStyle3={'background-color': 'brown'}
      $scope.color1 = true;
        }
    }



  });
