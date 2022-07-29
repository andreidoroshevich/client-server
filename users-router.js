const {addUser, getUsers, deleteUser, getUser, updateUser} = require("./repository");
const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get('/', async (req, res) => {
    let users = await getUsers(req.query.search)
    res.send(JSON.stringify(users))
})

router.delete('/:_id', async (req, res) => {
    let userId = req.params._id
    console.log(userId)
    await deleteUser(userId)
    res.sendStatus(204)
})

router.get('/:id', async (req, res) => {
    let userId = req.params.id
    let user = await getUser(userId)
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

router.put('/', async (req, res) => {
    let name = req.body.name
    let userId = req.body._id
    await updateUser(userId, name)
    res.send(JSON.stringify({success: true}))
})

module.exports = router;
