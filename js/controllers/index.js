'use strict';
app.controller('indexController', ['$scope', '$rootScope', 'localStorageService', '$state', '$cookieStore',
	function($scope, $rootScope, localStorageService, $state, $cookieStore){
		$rootScope.userName = $cookieStore.get('userName');
		if(!$rootScope.userName){
			$state.go('login');
		}

		$scope.startGame = function(){
			localStorageService.add('isStartGame', true);
			$state.go('game');
		};

	}]);