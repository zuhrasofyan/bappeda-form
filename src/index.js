angular
  .module('app', ['ui.router', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ngMessages'])
  .run(function ($rootScope, $state, store, jwtHelper, $location, authManager) {
    // authManager.checkAuthOnRefresh();
    // run check on each of refreshed state
    $rootScope.$on('$locationChangeStart', function () { // eslint-disable-line angular/on-watch
      // Get the JWT that is saved in localStorage
      // and if it is there, check whether it is expired.
      // If it isn't, set the user's auth state
      var token = store.get('token');
      if (token) {
        if (!jwtHelper.isTokenExpired(token)) {
          if (authManager.isAuthenticated) {
            authManager.authenticate(store.get('user'), token);
          }
        }
      } else {
        // Otherwise, redirect to the home route
        $rootScope.isAuthenticated = false;
        // do not use $state.go('login') since it will redirect everything to login even when in the unprotected state
        // $location.path('/');
      }
    });
  })
  .constant('configSettings', {
    baseUrl: 'http://localhost:1337/'
    // baseUrl: 'https://bappeda.bandaacehkota.go.id/service/kpk/'
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('altTheme')
      .primaryPalette('orange')
      .accentPalette('green');
    $mdThemingProvider.theme('greenTheme')
      .primaryPalette('green');
    // $mdThemingProvider.setDefaultTheme('altTheme');
  });
