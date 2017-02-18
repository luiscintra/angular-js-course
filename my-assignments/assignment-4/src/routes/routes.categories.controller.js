(function () {

angular.module('MenuApp')
.controller('CategoriesRouteController', CategoriesRouteController);

CategoriesRouteController.$inject = ['categoryList'];
function CategoriesRouteController(categoryList) {

    var crc = this;

    crc.categoryList = categoryList;

}

})();
