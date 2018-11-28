angular
  .module('app')
  .component('userDashboard', {
    templateUrl: 'app/pages/userDashboard/userDashboard.html',
    controller: userDashboardController,
    controllerAs: 'vm'
  });

function userDashboardController(UserService, $http, configSettings) {
  var vm = this;

  // general
  vm.hello = "hello";

  // for tab user
  function getUser() {
    var a = UserService.getCurrentUser();
    return a;
  }

  vm.user = getUser();

  function allUser() {
    return $http.get(configSettings.baseUrl + 'officer/get-all-user');
  }

  allUser().then(function (d) {
    vm.allUser = d.data;
  });
}
