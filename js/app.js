'use strict';

var app = angular.module('funnyApp').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('index', {
			url: '/',
			views: {
				content: {
					templateUrl: 'views/index.html'
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
		.state('game', {
			url: '/game',
			views: {
				content: {
					templateUrl: 'views/game.html'
				}
			}
		})
}]);
