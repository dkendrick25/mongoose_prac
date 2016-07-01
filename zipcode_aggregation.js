var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/population');
var ZipCode = require("./zipcodesmodel");


ZipCode.aggregate([
  { $group: {_id: {city: '$city'}, total: {$sum: '$pop'} } },
  {$sort: {total: -1}},
  {$limit: 3}
  ],
  function(err, result) {
    if(err) {
      console.log(err.message);
    }
    console.log('here is the top 3 city pops', result);
  });
