'use strict';
angular.module('myApp')
    .controller('myController',['$scope','address', 'reddit', function($scope, address, reddit){
        $scope.address = address;
        $scope.reddit = reddit;
        $scope.resetStreet = function(){
            $scope.address.resetStreet();
        }
}]);
