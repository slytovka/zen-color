'use strict';

angular.module('zenColorApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    // User.get(function(user) {
    //     var user = user;
    //     user.colors = $scope.colors;
    //     console.log(user);
    //   });
    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });
