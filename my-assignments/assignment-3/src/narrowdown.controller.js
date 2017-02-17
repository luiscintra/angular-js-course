(function() {
 'use strict';
 
 angular.module('NarrowItDownApp')
 .controller('NarrowItDownController', NarrowItDownController);
 
 NarrowItDownController.$inject = ['MenuSearchService'];
 function NarrowItDownController(MenuSearchService) {
 
     var ctrl = this;

     ctrl.searchTerm = "";

     ctrl.getMatchedMenuItems = function(term) {
        
        var resultPromisse = MenuSearchService.getMatchedMenuItems(term);

        resultPromisse.then(function (response) {
            ctrl.foundItemsArray = response;
        }); 
     }

     ctrl.remove = function(item) {
         ctrl.foundItemsArray.splice(item, 1);
     }
}

})();