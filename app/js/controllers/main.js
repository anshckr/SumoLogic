'use strict';
angular.module('myApp.main', []).controller('MainController', [
  '$scope',
  '$window',
  '$timeout',
  function($scope, $window, $timeout) {
    /**
     * [data dummy data for select boxes]
     * @type {Array}
     */
    $scope.data = [{
      team: 'Engineering',
      employees: [
        'Lawana Fan',
        'Larry Rainer',
        'Rahul Malik',
        'Leah Shumway'
      ]
    }, {
      team: 'Executive',
      employees: [
        'Rohan Gupta',
        'Ronda Dean',
        'Robby Maharaj'
      ]
    }, {
      team: 'Finance',
      employees: [
        'Caleb Brown',
        'Carol Smithson',
        'Carl Sorensen'
      ]
    }, {
      team: 'Sales',
      employees: [
        'Ankit Jain',
        'Anjali Maulingkar'
      ]
    }];
    // call initialise after everything has loaded
    $timeout(function() {
      $scope.initialise();
    }, 0);
    /**
     * [convert_teams_into_select2_object converts dummy team data into select2 acceptable format]
     * @param  {[type]} array [dummy data array]
     * @return {[type]}       [select2 acceptable team data]
     */
    $scope.convert_teams_into_select2_object = function(array) {
      var count = 1;
      return $.map(array, function(item) {
        return {
          id: count++,
          text: item.team
        };
      });
    };
    /**
     * [convert_employees_into_select2_object converts dummy employee data into select2 acceptable format]
     * @param  {[type]} array [dummy data array]
     * @param  {[type]} team  [selected team]
     * @return {[type]}       [select2 acceptable employee data]
     */
    $scope.convert_employees_into_select2_object = function(array, team) {
      var count = 1;
      var obj = $.grep(array, function(ele) {
        return ele.team === team;
      });
      return $.map(obj[0].employees, function(item) {
        return {
          id: count++,
          text: item
        };
      });
    };
    /**
     * [initialise initialise select2s]
     */
    $scope.initialise = function() {
      $('#team').select2({
        data: $scope.convert_teams_into_select2_object($scope.data),
        placeholder: 'Select Team...',
        width: '100%'
      });
      var ele_emp = $('#employee');
      ele_emp.select2({
        placeholder: 'Select Employee...',
        width: '100%'
      });
      ele_emp.select2('val', '');
      ele_emp.find('option:not(:first)').remove();
      // Uncheck send mail check-box
      $('.send_mail input').attr('checked', false);
    };
    /**
     * [updateSelect2 update employee select2 based on team selected]
     */
    $scope.updateEmployeeSelect = function(index) {
      var team_name = $scope.data[index].team;
      var data = $scope.convert_employees_into_select2_object($scope.data, team_name);
      $('#employee').find('option:not(:first)').remove();
      $('#employee').select2({
        placeholder: 'Select an Employee...',
        data: data,
        width: '100%'
      });
    };
    /**
     * [clearSearch re-initialise when 'Cancel' button is clicked]
     */
    $scope.clearSearch = function() {
      $scope.initialise();
      $('#overlay').addClass('hide');
    };
    /**
     * [sendRequest handler when 'OK' is clicked]
     */
    $scope.sendRequest = function() {
      if (!!$('#employee').val()) {
        $window.alert('Request Sent!!');
        $('#overlay').addClass('hide');
      } else {
        $window.alert('Please fill-in values for both Team and Employee!!');
      }
    };
    // watch for changes in team select2 and re-render employee select2
    $scope.$watch('index', function(newValue, oldValue) {
      // access new and old value here
      if (!!newValue) {
        $scope.updateEmployeeSelect(parseInt(newValue, 10) - 1);
      }
    });
    /**
     * [showHideOverlay show/hide dialog]
     */
    $scope.showHideOverlay = function() {
      var ele_overlay = $('#overlay');
      ele_overlay.toggleClass('hide');
      if (!ele_overlay.hasClass('hide')) {
        $scope.initialise();
      }
    };
  }
]);