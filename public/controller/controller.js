var petStoreApp = angular.module('petStoreApp', ['angular-loading-bar', 'ngAnimate']);

petStoreApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
 	$scope.domainName = ' https://zsvx9xdjf3.execute-api.us-east-1.amazonaws.com/alpha';

 	$scope.fetchMasters = function () {
 		var url = $scope.domainName + '/masters';

		$http.get(url).success(function(response){
 			$scope.masters = response;
 		});
 	}

 	$scope.fetchPetOfMaster = function (masterID) {
 		var url = $scope.domainName + '/master/' + masterID + '/pet';

		$http.get(url).success(function(response){
 			$scope.currentPet = response[0];
 		});
 	}

 	$scope.showModal = function () {
 		$('#addModal').modal('show');
 	}
}]);