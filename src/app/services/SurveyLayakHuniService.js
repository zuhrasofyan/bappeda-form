angular
  .module('app')
  .service('SurveyLayakHuniService', SurveyLayakHuniService);

function SurveyLayakHuniService($http, configSettings) {
  var vm = this;

  /* Survey Layak Huni Entry */

  /* get data kecamatan and desa */
  function getKecamatanDesa() {
    return $http.get(configSettings.baseUrl + 'kecamatan/kecamatan-desa');
  }
  vm.getKecamatanDesa = getKecamatanDesa;
}
