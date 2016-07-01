var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/class');
var Student = require("./studentmodel");

var deeann = new Student({
  name: 'DeeAnn',
  links: {
    website: 'https://www.deeannkendrick.com',
    github: "https://github.com/dkendrick25"
  },
  gender: 'female',
  points: 10,
  projects: [
    'Rate The Throne', 'Draw Together', 'Weather App'
  ]
});

deeann.save(function(err) {
  if(err) {
    console.log(err.message);
    return;
  }
  console.log('saved deeann!', deeann);
  process.exit();
});
