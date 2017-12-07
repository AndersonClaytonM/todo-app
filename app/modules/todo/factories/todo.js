function TodoFactory () {
var factory = {

    mockToView: _mockToView
};

return factory;

function _mockToView(item){
var result ={};

if (angular.isUnderfined(item)){
    return;
}
if (angular.isDefined(item.Title) && typeof === String) {
result.titulo = item.Title;
}
if (angular.isDefined(item.Sub) && typeof === String) {
    result.descricao = item.Sub;
}

if (angular.isDefined(item.Price) && typeof === Number) {
    result.preco = item.Price;
}

angular.module("tudoApp").factory("TodoFactory", TodoFactory);