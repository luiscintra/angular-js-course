(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.lunchInput = "";

  $scope.checkLunch = function() {

    if(!$scope.lunchInput) {
      displayError("Please, enter data first.");      

    } else {

      if (countLunchItems() <= 3) {
        displaySuccess("Enjoy!");

      } else {
        displaySuccess("Too much!");

      }
    }
  }

  function displaySuccess(msg) {
    clearAlerts();
    $scope.showSuccess = true;
    $scope.successMessage = msg;
    $scope.borderStyle = { "border-color" : "#3c763d" }; 
  }

  function displayError(msg) {
    clearAlerts();
    $scope.showError = true;
    $scope.errorMessage = msg; 
    $scope.borderStyle = { "border-color" : "#a94442" };
  }

  function clearAlerts() {
    $scope.showSuccess = false;
    $scope.showError = false;
    $scope.borderStyle = "";
  }
  $scope.clearAlerts = clearAlerts; 

  function countLunchItems() {

    var array = $scope.lunchInput.split(",");
    var count = 0;

    for (var i in array) {
      var item = array[i];
      if (!("" == item.trim())) {
        count++;
      }
    }
    
    return count;
  }

}

})();
