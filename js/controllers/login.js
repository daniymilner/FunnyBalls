'use strict';
app.controller('loginController', ['$scope', '$state', '$rootScope', '$cookieStore',
	function($scope, $state, $rootScope, $cookieStore){
		$scope.userName = '';
		$scope.signIn = function(){
			if($scope.userName){
				$rootScope.userName = $scope.userName;
				$cookieStore.put('userName', $scope.userName);
				$state.go('index');
			}
		}
	}]);