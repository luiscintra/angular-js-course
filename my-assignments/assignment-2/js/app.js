(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;
  buy.toBuyItems = ShoppingListCheckOffService.getBuy();

  buy.buy = function(idx) {
    ShoppingListCheckOffService.buy(idx);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.boughtItems = ShoppingListCheckOffService.getBought();
}

function ShoppingListCheckOffService() {
  var service = this;

  var boughtItems = [];

  var toBuyItems = [
    {name: "cookies", quantity: 10},
    {name: "brownies", quantity: 2},
    {name: "beers", quantity: 5},
    {name: "chips", quantity: 3},
    {name: "bagels", quantity: 8},
    {name: "donuts", quantity: 18}
  ];

  service.getBuy = function() {
    return toBuyItems;
  }

  service.getBought = function() {
    return boughtItems;
  }

  service.buy = function(idx) {
    var item = toBuyItems.splice(idx, 1);
    boughtItems.push(item[0]);
  }

}

})();
