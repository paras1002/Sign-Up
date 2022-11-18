const express = require ('express')
const router = express.Router();
const mongoose = require ('mongoose')

//import the DB Schema

const signup = require('../models/users')

router.get('/' ,(req,res) =>{
    signup.find()
    .then(result => res.status(200).json({message: "Entries from the Db" ,entries: result}))
    .catch(err => res.status(500).json({error:err}))
})



router.get('/:usersId', (req, res) => {
    const usersId = req.params.usersId
    signup.findById(usersId)
        .then(result => res.status(200).json( {message: "Resouce Found", found_entry: result} ))
        .catch(err => res.status(500).json({error: err}))
})

//post req to add users

router.post('/' , (req,res)=>{
    const sig = new signup({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        email : req.body.email,
        contact : req.body.contact,
    })
    sig.save()
    .then(result => {
        res.status(201).json({message: "item posted to DB", createdProduct : result})
    } )
    .catch(err => res.status(500).json({error:err}))
}) 


router.put('/:id', (req, res) => {
    const usersId =req.params.id

    const updatedsignup = {
        _id : mongoose.Types.ObjectId(),
        name : req.body.name,
        email : req.body.email,
        contact : req.body.contact

    }
    signup.findByIdAndUpdate(usersId , updatedsignup)
    .then(result => res.status(203).json({message : "users updated"}))
    .catch(err =>res.status(500).json({message : "error found ",error:err}))
})


router.patch('/:id', (req, res) => {
    const usersId = req.params.id
    const updatedsignup = {
        _id: usersId,
        name : req.body.name,
        email : req.body.email,
        contact : req.body.contact
    }
    signup.findByIdAndUpdate(usersId, updatedsignup)
        .then(result => res.status(203).json( {message: 'Update Successfyl', updatedsignup: result} ))
        .catch(err => res.status(500).json( {message: 'Server Error', error: err} ))
})


router.delete('/:usersId',(req,res) =>{
    const id = req.params.usersId
    signup.remove({_id : id})
   .then( res.status(200).json( {message: 'User deleted', info :result} ))
   .catch

})



module.exports = router;