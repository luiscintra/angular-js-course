(function () {
'use strict';

angular.module('MenuData')
.component('menuItems', {
  templateUrl: 'src/components/menuitems.component.html',
  controller: ItemsComponentController,
  bindings: {
    items: '<'
  }
});

ItemsComponentController.$inject = ['$scope', '$element']
function ItemsComponentController($scope, $element) {
  var $ctrl = this;

}

})();
