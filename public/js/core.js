var birdPredictor = angular.module('birdPredictor', []);

birdPredictor.controller('mainController', function mainController($scope, $http) {
  $scope.observations = [];
  $scope.birdTypes = ['Bluejay', 'Chickadee', 'Service3'];

  $scope.submit = function(){
    if(!$scope.form.$valid)
      return alert("Please enter both a type and time");
    var convertTime = $scope.data.time.toTimeString().split(" ")[0].slice(0,5);
    var obvservation = {
        type: $scope.data.birdType,
        time: convertTime,
        displayTime: $scope.data.time.toLocaleTimeString()
    };
    $scope.observations.push(obvservation);
    $scope.data.birdType = '';
    $scope.data.time = '';
    $scope.form.$setPristine();
  }

  $scope.predict = function(){
    if($scope.observations.length < 1)
      return alert('You need to enter at least one observation. The more the better!');
    $http.post('/predict', $scope.observations)
      .then(function(data) {
        console.log(data);
      })
      .catch(function(data) {
        console.log('Error: ' + data);
      });
  };

});

