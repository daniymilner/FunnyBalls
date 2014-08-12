'use strict';

var app = angular.module('funnyApp').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('index', {
			url: '/',
			views: {
				content: {
					templateUrl: 'views/game.html'
				}
			}
		})
		.state('login', {
			url: '/login',
			views: {
				content: {
					templateUrl: 'views/login.html'
				}
			}
		})
}]);
