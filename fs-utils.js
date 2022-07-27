const fs = require("fs");

exports.readJSONFromFile = (filePath)=>{
    let promise = new Promise((resolve, reject) => {
        fs.readFile(filePath, function (err, buf) {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(buf.toString()))
            }
        });
    })
    return promise
}

exports.writeJSONToFile = (filePath, data)=>{
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}