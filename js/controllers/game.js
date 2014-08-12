'use strict';
app.controller('gameController', ['$scope', '$rootScope', 'localStorageService', '$state', '$cookieStore','$timeout',
	function($scope, $rootScope, localStorageService, $state, $cookieStore,$timeout){
		$rootScope.userName = $cookieStore.get('userName');
		if(!$rootScope.userName){
			$state.go('login');
		}
		$scope.types = ['red', 'blue', 'green', 'yellow'];
		$scope.removeItems = function(element){
			$scope.chooseItem(element);
			$timeout(function(){
				$scope.deleteItems();
			},5000);
		};
		$scope.chooseItem = function(element){
			var next, index = 0;
			element.toDelete = true;
			if(element.j > 0){
				next = $scope.broad[element.i][element.j - 1];
				if(next && !next.toDelete && next.type == element.type){
					$scope.chooseItem(next);
				}
			}
			index=0;
			while(true){
				if($scope.broad[element.i][index])
					index++;
				else break;
			}
			if(element.j < index){
				next = $scope.broad[element.i][element.j + 1];
				if(next && !next.toDelete && next.type == element.type){
					$scope.chooseItem(next);
				}
			}
			if(element.i > 0){
				next = $scope.broad[element.i - 1][element.j];
				if(next && !next.toDelete && next.type == element.type){
					$scope.chooseItem(next);
				}
			}
			index=0;
			while(true){
				if($scope.broad[index] && $scope.broad[index][element.j])
					index++;
				else break;
			}
			if(element.i < index){
				if($scope.broad[element.i + 1]){
					next = $scope.broad[element.i + 1][element.j];
					if(next && !next.toDelete && next.type == element.type){
						$scope.chooseItem(next);
					}
				}
			}
		};
		$scope.deleteItems = function(){
			var newArray = [];
			for(var i = 0; i < $scope.broad.length; i++){
				newArray=[];
				for(var j = 0;j<$scope.broad[i].length;j++){
					if (!$scope.broad[i][j].toDelete)
						newArray.push($scope.broad[i][j]);
				}
				$scope.broad[i] = newArray;
			}
		};

		$scope.init = function(){
			$scope.gameSize = 15;
			$scope.broad = [];
			for(var i = 0; i < $scope.gameSize; i++){
				$scope.broad.push([]);
				for(var j = 0; j < $scope.gameSize; j++){
					$scope.broad[i].push(
						{
							i: i,
							j: j,
							type: $scope.types[Math.floor(Math.random() * $scope.types.length)]
						}
					);
				}
			}
		};
		$scope.init();
	}]);