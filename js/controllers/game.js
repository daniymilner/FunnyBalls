'use strict';
app.controller('gameController', ['$scope', '$rootScope', 'localStorageService', '$state', '$cookieStore',
	function($scope, $rootScope, localStorageService, $state, $cookieStore){
		$rootScope.userName = $cookieStore.get('userName');
		if(!$rootScope.userName){
			$state.go('login');
		}


	}]);