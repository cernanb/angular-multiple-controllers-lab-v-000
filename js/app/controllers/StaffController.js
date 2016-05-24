function StaffController(){
  var vm = this;
  vm.name = "Ashley Bernardo";
  vm.email = "ashley@email.com";
  vm.phone = "555-123-7364";
}

angular
  .module('app')
  .controller('StaffController', StaffController);
