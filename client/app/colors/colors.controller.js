'use strict';

angular.module('zenColorApp')
  .controller('ColorsCtrl', function ($scope, colorService, User, $http) {
    $scope.message = 'Hello';
    $scope.isSubmit = false;
    $scope.color1 = false;
    $scope.color2 = false;
    $scope.color3 = false;
    $scope.colors = [];
    $scope.isComplete = false;

    $scope.getAll = function() {
      colorService.getAll().then(function(response) {
        $scope.colors = response.data;

      });
    };
    $scope.getAll();

    $scope.colorize = function(color) {

      //$scope.colors = colorService.getAll;

      if (color == 'blue') {
      $scope.myStyle1={'background-color': 'blue'}
      $scope.color1 = $scope.colors[1];
      console.log($scope.color1);
       }
      else if(color =='red') {
      $scope.myStyle1={'background-color': 'red'}
      $scope.color1 = $scope.colors[2];
      console.log($scope.color1);
       }
      else if(color =='yellow') {
      $scope.myStyle1={'background-color': 'yellow'}
      $scope.color1 = $scope.colors[0];
      console.log($scope.color1);
       }
      else if(color =='green') {
      $scope.myStyle2={'background-color': 'green'}
      $scope.color2 = $scope.colors[3];
      console.log($scope.color2);
       }
      else if(color =='purple') {
      $scope.myStyle2={'background-color': 'purple'}
      $scope.color2 = $scope.colors[4];
      console.log($scope.color2);
       }
      else if(color =='orange') {
      $scope.myStyle2={'background-color': 'orange'}
      $scope.color2 = $scope.colors[5];
      console.log($scope.color2);
       }
      else if(color =='black') {
      $scope.myStyle3={'background-color': 'black'}
      $scope.color3 = $scope.colors[6];
       }
      else if(color =='white') {
      $scope.myStyle3={'background-color': 'white'}
      $scope.color3 = $scope.colors[7];
       }
      else if(color =='brown') {
      $scope.myStyle3={'background-color': 'brown'}
      $scope.color3 = $scope.colors[8];
        }
    };


    $scope.getResults = function() {
      $scope.colors = [$scope.color1, $scope.color2, $scope.color3];
      console.log($scope.colors);
      $scope.isComplete = true;
      User.get(function(user) {
        var user = user;
        user.colors = $scope.colors;
        console.log(user);
        $http.put('/api/users/' + user._id, user);
      });
    };



      //update user.colors
      //console.log(user);
      // user.colors = $scope.colors;
      // $http.put for user
    });
