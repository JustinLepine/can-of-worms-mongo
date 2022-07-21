const express = require('express')
const router = express.Router()
const User = require('../models/users')

// Get All

router.get('/', async (req,res) => {
    try {
        const users = await User.find()
        res.status(500).json(users).send('Get All: Successful')
    } catch (err) {
        res.status(500).json({ message: err.message }).send('Message: Get All: Failed')
    }    
})

// Getting One

router.get('/:id', getUser, (req,res) => {
    res.send(`Get User ${res.user.name}`).json(res.user)
    
})

// Create One

router.post('/', async (req,res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser).send('Message: User successfly created')
    } catch (err) {
        res.status(400).json({ message: err.message }).send('Message: User creation failed')
    }
    
})

// Updating One

router.patch('/:id', getUser, async (req,res) => {

    if(req.body.name != null){
        res.user.name = req.body.name
    }

    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({ messsage: `Unable to update user ${err.message}`})
    }
    
})

// Deleting one 

router.delete('/:id', getUser, async (req,res) => {

    try {
        await res.user.remove()
        res.json({ message: 'Deleted User'})
    } catch (err) {
        res.status(500).json({ message: `Error unable to delete ${err.message}`})
    }
    res.send('Delete One')


})

async function getUser(req, res, next) {
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.user = user
    next()
}

module.exports = router