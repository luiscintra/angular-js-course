(function () {

angular.module('MenuApp')
.controller('CategoryItemsRouteController', CategoryItemsRouteController);

CategoryItemsRouteController.$inject = ['items', '$stateParams'];
function CategoryItemsRouteController(items, $stateParams) {

    var irc = this;

    irc.items = items;
    irc.categoryName = $stateParams.categoryName;

}

})();
