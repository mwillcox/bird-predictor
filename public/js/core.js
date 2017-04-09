var birdPredictor = angular.module('birdPredictor', []);

birdPredictor.controller('mainController', function mainController($scope) {
  $scope.observations = [];
  $scope.birdTypes = ['Robin', 'Bluejay', 'Chickadee']
  $scope.submit = function(){
    console.log($scope.data.birdType);
    console.log($scope.data.time);
    var obvservation = {
        type: $scope.data.birdType,
        time: $scope.data.time
    };
    $scope.observations.push(obvservation);
    console.log($scope.observations);
  }
});

