var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	// body...
    $routeProvider
    
    .when('/', {
		templateUrl: 'pages/index.html',
		controller: 'indexController'
	})

	.when('/main', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})

	.when('/second', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
});

myApp.controller('indexController', ['$scope', '$log',
function ($scope, $log) {
	// body...

}]);

myApp.controller('mainController', ['$scope', '$log',
function ($scope, $log) {
	// body...

}]); 

myApp.controller('secondController', ['$scope', '$log',
function ($scope, $log) {
	// body...

}]); 