const {MongoClient} = require("mongodb");

let client = new MongoClient('mongodb://0.0.0.0:27017')
let db = client.db('incubator')

const usersCollection = db.collection('users')

async function main() {
        await client.connect();
}

exports.usersCollection = usersCollection
exports.main = main
exports.db=db


