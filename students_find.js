var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/class');
var Student = require("./studentmodel");


Student.find(function(err, students){
  if(err) {
    console.log(err.message);
    return;
  }
  console.log('found all the students', students);
});

Student.find({name: 'Carolyn'}, function(err, carol) {
  if(err) {
    console.log(err.message);
    return;
  }
  console.log('You found her', carol);
});

Student.update(
  { name: 'Carolyn' },
  { $set: { points: 15 } },
  function(err, carol) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Updated succeeded', carol);
  }
);

//to remove an entry
Student.remove(
  { _id: '57767cde323d30c0d40de808' },        // selector
  function(err, reply) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Remove succeeded', reply.result);
    process.exit();
  }
);
