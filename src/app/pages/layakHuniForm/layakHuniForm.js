function layakHuniFormController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('layakHuniForm', {
    templateUrl: 'app/pages/layakHuniForm/layakHuniForm.html',
    controller: layakHuniFormController
  });

