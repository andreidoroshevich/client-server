const {addUser, getUsers} = require("./repository");
const express = require('express');
const router = express.Router();



// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', async (req, res) => {
    let users = await getUsers()
    res.send(JSON.stringify(users))
})


router.get('/:id', async (req, res) => {
    let users = await getUsers()
    console.log(req.params.id)
    console.log(users)
    let userId = Number(req.params.id)
    let user = users.find(u => u.id === userId)
    if (user) {
        res.send(user)
    } else {
        res.send('USER NOT FOUND')
    }
})

router.post('/', async (req, res) => {
    let name = req.body.name
    await addUser(new Date(), name)
    res.send(JSON.stringify({success: true}))
})

module.exports = router;


// const usersController = async (req, res)=>{
//     if (req.method === "POST") {
//         await addUser(3, "Lesha");
//         res.end()
//     } else {
//         let users = await getUsers()
//         res.write(JSON.stringify(users))
//         res.end()
//     }
// }
//
// exports.usersController = usersController