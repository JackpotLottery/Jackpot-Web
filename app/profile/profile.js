'use strict';

angular.module('myApp.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'ProfileCtrl'
  });
}])

.controller('ProfileCtrl', ['$scope', function($scope) {

	$scope.defaultProfilePicture = "./img/defaultProfilePicture.jpg"

	$scope.user = {
		name:"Test User",
		groups:[
			"Microsoft Interns 2017",
			"Universal Store Interns",
			"Test Group"
		],
		picture:$scope.defaultProfilePicture
	}

}]);