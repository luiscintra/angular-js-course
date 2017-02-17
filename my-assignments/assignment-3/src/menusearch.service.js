(function () {
 'use strict';

 angular.module('NarrowItDownApp')
 .service('MenuSearchService', MenuSearchService);

 MenuSearchService.$inject = ['$http'];
 function MenuSearchService($http) {
     var service = this;

     service.getMatchedMenuItems = function(searchTerm) {
         return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(
             function (response) {
                 
                 var result = [];

                 response.data.menu_items.forEach(function(element) {
                     
                     if (searchTerm.trim() && element.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                         result.push(element);
                     }

                 }, this);

                 return result;
             }
         );
     }

 }

})();