angular
  .module('app')
  .service('UserService', UserService);

function UserService(store) {
  var vm = this;
  var currentUser = null;
  var currentToken = null;

  function setCurrentToken(token) {
    currentToken = token;
    store.set('token', token);
    return currentToken;
  }

  function setCurrentUser(user) {
    currentUser = user;
    store.set('user', user);
    return currentUser;
  }

  function getCurrentUser() {
    if (!currentUser) {
      if (!store.get('user')) { // eslint-disable-line no-negated-condition
        currentUser = {username: 'none'};
      } else {
        currentUser = store.get('user');
      }
    }
    return currentUser;
  }

  function getCurrentToken() {
    currentToken = store.get('token');
    return currentToken;
  }

  vm.setCurrentUser = setCurrentUser;
  vm.setCurrentToken = setCurrentToken;
  vm.getCurrentUser = getCurrentUser;
  vm.getCurrentToken = getCurrentToken;
}
