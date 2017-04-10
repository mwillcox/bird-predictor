var bodyParser = require('body-parser');
var bayes = require('bayes');

module.exports = function(app){
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/predict', function(req, res){
    if(req.body){
      result = classify(req.body);
      res.send(result);
    }
  });
};

function classify(list){
  var classifier = bayes();

  for(var i = 0; i < list.length; i++){
    // teach the classifier based off user's observations
    classifier.learn(list[i].time, list[i].type);
  }
  // generate a random time
  var d = new Date();
  d.setHours(Math.random() * 24);
  d.setMinutes(Math.random() * 60);
  var time = d.toTimeString().split(" ")[0].slice(0,5);

  // ask the classifier which type bird would appear based off random time
  var type = classifier.categorize(time);
  var result = {time: d.toLocaleTimeString(), type: type};
  return result;
}
