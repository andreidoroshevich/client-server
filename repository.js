const {usersCollection} = require("./models/user");
const {ObjectId} = require("mongodb");


const getUsers = async (search) => {
    if (!search){
        return await usersCollection.find({}).toArray()
    }else {
        return await usersCollection.find({name: new RegExp(search)}).toArray()

    }
}

const getUser = async (id) => {
        return await usersCollection.find({"_id" : ObjectId(id)}).toArray()
}

const addUser = async (name) => {
    await usersCollection.insertOne({name})
}

const deleteUser = async (id) => {
    await usersCollection.deleteOne({"_id" : ObjectId(id)})
}

const updateUser = async (id, name) => {
    await usersCollection.updateOne({"_id" : ObjectId(id)}, {$set:{name: name}})
}

exports.getUsers = getUsers
exports.getUser = getUser
exports.addUser = addUser
exports.deleteUser = deleteUser
exports.updateUser = updateUser