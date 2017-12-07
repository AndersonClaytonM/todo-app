function DashCtrl() {
    var vm = this;
    vm.pageTitle = 'Dashboard title<small>subtext</small>';

    _init();

    function _init() {

    }


}

angular.module('todoApp')
    .controller('DashCtrl', DashCtrl);
