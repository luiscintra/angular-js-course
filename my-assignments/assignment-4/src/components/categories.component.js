(function () {
'use strict';

angular.module('MenuData')
.component('categories', {
  templateUrl: 'src/components/categories.component.html',
  controller: CategoriesComponentController,
  bindings: {
    categoryList: '<'
  }
});

CategoriesComponentController.$inject = ['$scope', '$element']
function CategoriesComponentController($scope, $element) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
  };

}

})();
