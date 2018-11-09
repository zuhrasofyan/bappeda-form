angular
  .module('app')
  .component('homeDashboard', {
    templateUrl: 'app/pages/homeDashboard/homeDashboard.html',
    controller: homeDashboardController,
    controllerAs: 'vm'
  });

function homeDashboardController(UserService, $http) { // eslint-disable-line no-unused-vars
  var vm = this;
  // for tab user
  function getUser() {
    var a = UserService.getCurrentUser();
    return a;
  }

  vm.user = getUser();
}
