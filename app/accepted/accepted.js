'use strict';

angular.module('myApp.accepted', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accepted', {
    templateUrl: 'accepted/accepted.html',
    controller: 'AcceptedCtrl'
  });
}])

.controller('AcceptedCtrl', [function() {

}]);