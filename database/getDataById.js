var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
/** 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("IKEA-Trådfri");
  var query = { _id: "1" };
  dbo.collection("Pærer").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/
module.exports.getDataById = async () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, async function (err, db) {
            if (err) {
                reject(err);
                throw err;
            }
            var dbo = db.db("IKEA-Trådfri");
            var query = {_id: "1" };
            dbo.collection("Pærer").find(query).toArray(async function (err, result) {
                if (err) {
                    reject(err);
                    throw err;
                }

                resolve(result)
                db.close();

            });

        });


    })
}