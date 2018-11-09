describe('layakHuniForm component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('layakHuniForm', function () {
      return {
        templateUrl: 'app/layakHuniForm.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<layakHuniForm></layakHuniForm>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
