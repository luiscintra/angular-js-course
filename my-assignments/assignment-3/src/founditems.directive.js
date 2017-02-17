(function () {
'use strict';

angular.module('NarrowItDownApp')
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',

    scope: {
        
//    on template(left)   alias on html(right)   
      title:              '@',                // @ binds to string value
      items:              '<',                // < binds one-way
      onRemove:           '&'                 // & binds to expression
                                              // = binds two-way
    },
    //controller: FoundItemsDirectiveController,
    //controllerAs: 'list'
    //bindToController: true
  };

  return ddo;
}

})();