var petStoreApp = angular.module('petStoreApp', []);

petStoreApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
	// $scope.masters = [{name: "asdsad"}, {name: "asdsad"}, {name: "asdsad"}];

 	$scope.currentPet = {id: 1, name: "Tommy", type:"Dog", age: 5};

 	$scope.domainName = ' https://zsvx9xdjf3.execute-api.us-east-1.amazonaws.com/alpha';

 	$scope.fetchMasters = function () {
 		var url = $scope.domainName + '/masters';

		$http.get(url).success(function(response){
 			$scope.masters = response;
 		});
 	}
}]);