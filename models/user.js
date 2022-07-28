const {MongoClient} = require("mongodb");

let client = new MongoClient('mongodb://0.0.0.0:27017')

let db = client.db('incubator')

const usersCollection = db.collection('users')

async function main() {
    try {
        await client.connect();
        console.log('Connected to mongoDb')
    }catch (e){
        console.log('Error connect to mongoDb', e)
    }
}

exports.usersCollection = usersCollection
exports.main = main

