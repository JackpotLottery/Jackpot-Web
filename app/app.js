'use strict';

// Declare app level module which depends on views, and components
//TODO add pending, accepted
angular.module('myApp', [
  'ngRoute',
  // 'myApp.explore',
  // 'myApp.profile',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
