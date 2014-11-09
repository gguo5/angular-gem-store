'use strict';

/**
 * @ngdoc function
 * @name angularGemStoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularGemStoreApp
 */
angular.module('angularGemStoreApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
