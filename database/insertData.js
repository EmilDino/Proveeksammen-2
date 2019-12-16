var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("IKEA-Trådfri");
  var myobj = [
    { _id: '1', hardwarenumber: '666', name: 'Bæstet', status: 'on', lightintensity: '100%', poweruse: '500 kw', color: 'white', softwareversion: '0.1'},
    { _id: '2', hardwarenumber: '1337', name: 'Madstools', status: 'on', lightintensity: '69%', poweruse: '6969 kw', color: 'black', softwareversion: '1.2'},
    { _id: '3', hardwarenumber: '420', name: 'Martin', status: '0ff', lightintensity: '0%', poweruse: '420 kw', color: 'green', softwareversion: '0.4.20'},
  ];
  dbo.collection("Pærer").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
