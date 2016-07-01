var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/class');
var Student = require('./studentmodel');

//make something not validate
var allen = new Student ({
  links: {
    website: 'http://www.allen.com'
  },
  gender: 'panda'
});

allen.save(function(err, allen) {
  if(err) {
    console.log(err.message);
    return;
  }
  console.log('you saved ', allen);
  process.exit();
});
