'use strict';
app.controller('gameController', ['$scope', '$rootScope', 'localStorageService', '$state',
	function($scope, $rootScope, localStorageService, $state){
		$rootScope.userName = localStorageService.get('userName');
		if(!$rootScope.userName){
			$state.go('login');
		}


	}]);