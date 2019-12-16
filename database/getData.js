var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

module.exports.getData = async () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, async function (err, db) {
            if (err) {
                reject(err);
                throw err;
            }
            var dbo = db.db("IKEA-Trådfri");
            dbo.collection("Pærer").find({}).toArray(async function (err, result) {
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