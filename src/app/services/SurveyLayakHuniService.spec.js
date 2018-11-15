describe('SurveyLayakHuniService service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (SurveyLayakHuniService) {
    expect(SurveyLayakHuniService.getData()).toEqual(3);
  }));
});
