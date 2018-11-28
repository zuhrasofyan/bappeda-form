angular
  .module('app')
  .component('componentQuote', {
    templateUrl: 'app/components/quote/quote.html',
    controller: quoteController,
    controllerAs: 'quote'
  });

function quoteController($http, store, UserService, configSettings) {
  var vm = this;
  vm.privateQuote = null;

  function test() {
    vm.apa = UserService.getCurrentToken();
  }
  vm.test = test;

  function getOpenQuote() {
    $http.get(configSettings.baseUrl + 'quote/open').then(function success(response) {
      vm.openQuote = response.data.quote;
    });
  }

  function getPrivateQuote() {
    $http.get(configSettings.baseUrl + 'quote/protected').then(function success(response) {
      vm.privateQuote = response.data.quote;
    });
  }
  vm.getOpenQuote = getOpenQuote;
  vm.getPrivateQuote = getPrivateQuote;

  vm.token = store.get('token');
}
