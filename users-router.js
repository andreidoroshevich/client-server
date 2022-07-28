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
    if (!!req.query.search) {
        users = users.filter(u=>u.name.indexOf(req.query.search)>-1)
    }

    res.send(JSON.stringify(users))
})

router.get('/:id', async (req, res) => {
    let users = await getUsers()
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
    await addUser(name)
    res.send(JSON.stringify({success: true}))
})

module.exports = router;
