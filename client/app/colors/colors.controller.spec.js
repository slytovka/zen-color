'use strict';

describe('Controller: ColorsCtrl', function () {

  // load the controller's module
  beforeEach(module('zenColorApp'));

  var ColorsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ColorsCtrl = $controller('ColorsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
