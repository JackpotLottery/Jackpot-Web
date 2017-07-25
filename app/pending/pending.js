'use strict';

angular.module('myApp.pending', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pending', {
    templateUrl: 'pending/pending.html',
    controller: 'PendingCtrl'
  });
}])

.controller('PendingCtrl', ['$scope', function($scope) {
	$scope.defaultImgPath = "./img/default.jpg"

	$scope.pendingEvents = [
		// {
		// 	title:'Hackathon', 
		// 	date:'Jul 07',
		// 	location:'One Microsoft Way, Redmond, WA',
		// 	group:'Interns 2017',
		// 	status:"accepted",
		// 	summary:"The quick brown fox jumped over the lazy dog"
		// },
		{
			title:'Demo', 
			img:$scope.defaultImgPath,
			date:'Jul 27',
			location:'Building 83',
			group:'Universal Store Interns',
			status:"pending",
			summary:"ahahahahhhhhhAHHHHHHHhaAAAAAAAAHHHHHHH ah ah"
		// },
		// {
		// 	title:'Demo', 
		// 	date:'Jul 27',
		// 	location:'Building 83',
		// 	group:'Universal Store Interns',
		// 	status:"available",
		// 	summary:"help"
		// },
		// {
		// 	title:'You can\'t go to this', 
		// 	date:'Jul 27',
		// 	location:'Building 83',
		// 	group:'Universal Store Interns',
		// 	status:"rejected",
		// 	summary:"BYE"
		}
		
	]
}]);