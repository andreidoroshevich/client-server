let fs = require("fs");
let path = require("path");
const {readJSONFromFile, writeJSONToFile} = require("./fs-utils");

const filePath = path.join(__dirname, 'users.json')

const getUsers = () => {
    return readJSONFromFile(filePath)
}

const addUser = async (id, name) => {
    let users = await getUsers()
    users.push({id, name})
    return writeJSONToFile(filePath, users)
}

exports.getUsers = getUsers
exports.addUser = addUser