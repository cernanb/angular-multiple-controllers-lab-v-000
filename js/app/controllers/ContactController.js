function ContactController(){
  var vm = this;
  vm.name = "Cernan Bernardo";
  vm.email = "cernan@email.com";
  vm.phone = "555-654-5675";

  this.changeName = function(){
    vm.name = "Jack Bauer";
  }
}


angular
  .module('app')
  .controller('ContactController', ContactController);
