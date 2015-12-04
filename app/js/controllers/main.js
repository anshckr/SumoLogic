'use strict';
angular.module('myApp.main', []).controller('MainController', [
  '$scope',
  '$window',
  '$timeout',
  function($scope, $window, $timeout) {
    $scope.data = [
    {
      team: 'Engineering',
      employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']
    }, {
      team: 'Executive',
      employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']
    }, {
      team: 'Finance',
      employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']
    }, {
      team: 'Sales',
      employees: ['Ankit Jain', 'Anjali Maulingkar']
    }];
    
    $scope.convert_teams_into_select2_object = function(array) {
      var count = 1;
      return $.map(array, function(item) {
        return {
          id: count++,
          text: item.team
        };
      });
    };

    $scope.convert_employees_into_select2_object = function(array, team) {
      var count = 1;
      var obj = $.grep(array, function(v) {
        return v.team === team;
      });
      return $.map(obj[0].employees, function(item) {
        return {
          id: count++,
          text: item
        };
      });
    };

    $('#team').select2({
      data: $scope.convert_teams_into_select2_object($scope.data),
      placeholder: "Select Team...",
      width: '100%'
    });

    $('#employee').select2({
      placeholder: "Select Employee...",
      width: '100%'
    });
    
    $scope.updateSelect2 = function() {
      var team = $scope.data[$scope.index].team;
      $('#employee').select2({
        placeholder: "Select an Employee...",
        data: $scope.convert_employees_into_select2_object($scope.data, team),
        width: '100%'
      });
    };

    // $('#team').on('change', function(){
    //   $(this).select2({
    //     data: _this.convert_into_select2_object(_this.data)
    //   });
    // });
  }
]);