const express = require('express')
const router = express.Router()

// Get All

router.get('/', (req,res) => {
    res.send('Get All')
})

// Getting One

router.get('/:id', (req,res) => {
    res.send('Get One')
    
})

// Create One

router.post('/', (req,res) => {
    res.send('Create One')
    
})

// Updating One

router.patch('/:id', (req,res) => {
    res.send('Update One')
    
})

// Deleting one 

router.delete('/:id', (req,res) => {
    res.send('Delete One')


})

module.exports = router