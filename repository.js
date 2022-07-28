const {readJSONFromFile} = require("./fs-utils");

let path = require("path");
const {usersCollection} = require("./models/user");

const filePath = path.join(__dirname, 'users.json')

const getUsers = () => {
    return readJSONFromFile(filePath)
}

const addUser = async (name) => {
    await usersCollection.insertOne({name})
}

exports.getUsers = getUsers
exports.addUser = addUser