var birdPredictor = angular.module('birdPredictor', []);

birdPredictor.controller('mainController', function mainController($scope, $http) {
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
    
  }

  $scope.predict = function(){
    // need to add validation
    $http.post('/predict', $scope.observations)
      .then(function(data) {
        console.log(data);
      })
      .catch(function(data) {
        console.log('Error: ' + data);
      });
  };

});

