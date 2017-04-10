var bodyParser = require('body-parser');
var bayes = require('bayes');

module.exports = function(app){
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  var classifier = bayes()

  // teach it positive phrases
  classifier.learn('1', 'chickadee')
  classifier.learn('1', 'chickadee')
  classifier.learn('1', 'chickadee')
  classifier.learn('1', 'chickadee')
  classifier.learn('1', 'chickadee')
  classifier.learn('2', 'bluejay')
  classifier.learn('12', 'chickadee')
  classifier.learn('13', 'chickadee')
  classifier.learn('14', 'chickadee')
  classifier.learn('5', 'robin')
  classifier.learn('5', 'robin')

  // now ask it to categorize a document it has never seen before
  console.log('Classified: ' + classifier.categorize('20'));

  // serialize the classifier's state as a JSON string.
  var stateJson = classifier.toJson()
  //console.log(stateJson);

  // load the classifier back from its JSON representation.
  var revivedClassifier = bayes.fromJson(stateJson)
  console.log(revivedClassifier);

  app.post('/predict', function(req, res){
    if(req.body){
      console.log("hey");
      res.send('Success');
    }
    
  });
};