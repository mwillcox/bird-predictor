var birdPredictor = angular.module('birdPredictor', []);

birdPredictor.controller('mainController', function mainController($scope, $http) {
  
  $scope.observations = [];
  $scope.birdTypes = ['Bluejay', 'Chickadee', 'Robin'];

  // user form submit button
  $scope.submit = function(){
    // require both inputs
    if(!$scope.form.$valid)
      return alert("Please enter both a type and time");
    //create obveservation
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

  // generate prediction button
  $scope.predict = function(){
    // form validation
    if($scope.observations.length < 1)
      return alert('You need to enter at least one observation. The more the better!');
    // retrieve results from classifer on server sides
    $http.post('/predict', $scope.observations)
      .then(function(result) {
        $scope.prediction = result.data;
      })
      .catch(function(result) {
        console.log('Error: ' + result);
      });
  };

});

