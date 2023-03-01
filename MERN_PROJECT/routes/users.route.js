const express = require ('express');
const { AddUser, FindUsers, FindOneUser, UpdateUser, DeleteUser } = require('../Controllers/Users.Controller');
const router = express.Router()


router.get('/api',(req,res)=>{
    res.send('work')
})
 
/* ADD USER */
router.post('/users', AddUser)

/* FIND ALL USERs */
router.get('/users', FindUsers)

/* FIND USER */
router.get('/users/:id', FindOneUser)

/* UPDATE USER */
router.put('/users/:id', UpdateUser)

/* DELETE USER */
router.delete('/users/:id', DeleteUser)


module.exports=router;