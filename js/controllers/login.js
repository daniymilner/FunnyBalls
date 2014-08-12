'use strict';
app.controller('loginController', ['$scope', '$state', 'localStorageService', '$rootScope',
	function($scope, $state, localStorageService, $rootScope){
		$scope.userName = '';
		$scope.signIn = function(){
			if($scope.userName){
				$rootScope.userName = $scope.userName;
				localStorageService.add('userName', $scope.userName);
				$state.go('index');
			}
		}
	}]);