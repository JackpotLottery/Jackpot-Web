'use strict';

angular.module('myApp.accepted', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accepted', {
    templateUrl: 'accepted/accepted.html',
    controller: 'AcceptedCtrl'
  });
}])

.controller('AcceptedCtrl', ['$scope', function($scope) {
	$scope.defaultImgPath = "./img/default.jpg"

	$scope.acceptedEvents = [
		{
			title:'Hackathon', 
			img:$scope.defaultImgPath,
			date:'Jul 07',
			location:'One Microsoft Way, Redmond, WA',
			group:'Interns 2017',
			status:"accepted",
			summary:"The quick brown fox jumped over the lazy dog"
		}
		// {
		// 	title:'Demo',
		// 	img:$scope.defaultImgPath,
		// 	date:'Jul 27',
		// 	location:'Building 83',
		// 	group:'Universal Store Interns',
		// 	status:"pending",
		// 	summary:"ahahahahhhhhhAHHHHHHHhaAAAAAAAAHHHHHHH ah ah"
		// },
		// {
		// 	title:'Demo', 
		// 	img:$scope.defaultImgPath,
		// 	date:'Jul 27',
		// 	location:'Building 83',
		// 	group:'Universal Store Interns',
		// 	status:"available",
		// 	summary:"help"
		// },
		// {
		// 	title:'You can\'t go to this', 
		// 	img:$scope.defaultImgPath,
		// 	date:'Jul 27',
		// 	location:'Building 83',
		// 	group:'Universal Store Interns',
		// 	status:"rejected",
		// 	summary:"BYE"
		// }
		
	]
}]);