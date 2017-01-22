(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope, $http) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };


  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }

  $scope.retrieveTimesheetData = function () {
     $http.get('data/data.json')
       .then(function(res){
          $scope.timesheet = res.data.timesheet_entries;
          console.log($scope.timesheet);
        });
  }

});


})();
