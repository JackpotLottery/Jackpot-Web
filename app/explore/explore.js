'use strict';

angular.module('myApp.explore', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/explore', {
    templateUrl: 'explore/explore.html',
    controller: 'ExploreCtrl'
  });
}])

.controller('ExploreCtrl', [function() {

}]);