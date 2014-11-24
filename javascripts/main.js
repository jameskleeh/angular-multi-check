angular.module('myApp', ['angular-multi-check'])
  .controller('MyController', function($scope) {
    $scope.people = [
      {id: 0, name: 'Joe'},
      {id: 1, name: 'John'},
      {id: 2, name: 'Jim'},
      {id: 3, name: 'Jason'},
      {id: 4, name: 'Jack'},
      {id: 5, name: 'Jamiroquai'},
      {id: 6, name: 'Jacob'},
      {id: 7, name: 'Jared'},
      {id: 8, name: 'Jeff'},
      {id: 9, name: 'Josh'}
    ];
  });
