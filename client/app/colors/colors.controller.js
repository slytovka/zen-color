'use strict';

angular.module('zenColorApp')
  .controller('ColorsCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.colorize = function(color) {
      if (color == 'blue')
      $scope.myStyle1={'background-color': 'blue'}
      else if(color =='red')
      $scope.myStyle1={'background-color': 'red'}
      else if(color =='yellow')
      $scope.myStyle1={'background-color': 'yellow'}
      else if(color =='green')
      $scope.myStyle2={'background-color': 'green'}
      else if(color =='purple')
      $scope.myStyle2={'background-color': 'purple'}
      else if(color =='orange')
      $scope.myStyle2={'background-color': 'orange'}
      else if(color =='black')
      $scope.myStyle3={'background-color': 'black'}
      else if(color =='white')
      $scope.myStyle3={'background-color': 'white'}
      else if(color =='brown')
      $scope.myStyle3={'background-color': 'brown'}
    }
  });
