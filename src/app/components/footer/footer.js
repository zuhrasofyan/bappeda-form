angular
.module('app')
.component('fountainFooter', {
  templateUrl: 'app/components/footer/footer.html',
  controller: footerController,
  controllerAs: 'vm'
});

function footerController() {
  var vm = this;
  var date = new Date();
  vm.year = date.getFullYear();
}
