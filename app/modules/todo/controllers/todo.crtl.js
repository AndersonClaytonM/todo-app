function TodoCtrl(TodoFactory) {
    var vm = this;
    vm.pageTitle = 'Dashboard <small>subtitle</small>';
    vm.products = {

        title:"product",
        sub:"test",
        price:13.43
    }

    vm.products = {}
    _init();

    function _init() {
    
       vm.products =  TodoFactory.mockToView(vm.products);
    }


}

angular.module('todoApp')
    .controller('TodoCtrl', TodoCtrl);
