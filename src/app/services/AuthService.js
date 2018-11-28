angular
  .module('app')
  .service('AuthService', function ($http, $rootScope, store, UserService, authManager, $state, configSettings) {
    var vm = this;
    // var isAuthenticated = false;
    function submitLogin(loginData) {
      $http.post(configSettings.baseUrl + 'auth/login', {
        email: loginData.email,
        password: loginData.password
      }).then(function (result) {
        if (result.status === 200) {
          if (store.get('user')) {
            store.remove('user');
          }
          if (store.get('token')) {
            store.remove('token');
          }
          UserService.setCurrentUser(result.data.user);
          UserService.setCurrentToken(result.data.token);
          authManager.authenticate();

          $state.go('dashboard.home');
          // console.log(jwtHelper.decodeToken(store.get('token')));
          // console.log(jwtHelper.getTokenExpirationDate(store.get('token')));
        } else {
          if (result.status === 400) { // eslint-disable-line no-lonely-if
            alert(result.data.message); // eslint-disable-line no-alert
          } else if (result.status === 401) {
            alert(result.data.message); // eslint-disable-line no-alert
          } else {
            alert(result.data.message); // eslint-disable-line no-alert
          }
        }
      });
    }

    function logout() {
      store.remove('user');
      store.remove('token');

      // $location.path('/');
      authManager.unauthenticate();
      $state.go('login');
      // console.log(authManager.isAuthenticated());
    }

    // register the functions
    vm.submitLogin = submitLogin;
    vm.logout = logout;
  });
