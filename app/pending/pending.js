'use strict';

angular.module('myApp.pending', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pending', {
    templateUrl: 'pending/pending.html',
    controller: 'PendingCtrl'
  });
}])

.controller('PendingCtrl', [function() {

}]);