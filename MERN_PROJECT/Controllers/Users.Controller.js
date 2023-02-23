const Users = require('../Models/User.Model')


/* ADD USER */
const AddUser = async (req, res)=>{
    try{
        await Users.create(req.body) //puisque notre fonction est async, donc on doit faire le await --> on va creer le req.body
        res.status(201).json({message: 'User added successfully !'})
    } catch(error){
        console.log(error.message);
    }
}

/* FIND ALL USERS */
const FindUsers = async (req, res)=>{
    try {
        const data = await Users.find()
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message);
    }
}

/* FIND USER */
const FindOneUser = async (req, res)=>{
    try {
        const data = await Users.findOne({_id: req.params.id})
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message);
    }
}

/* UPDATE USER */
const UpdateUser = async(req, res) =>{
    try {
        const data = await Users.findOneAndUpdate({_id: req.params.id},
            req.body, // le nouveau contenu de req.body
            {new : true}) // new:true --> nouvelle update
        res.status(201).json(data) 
    } catch (error) {
        console.log(error.message);
    }
}

/* DELETE USER */
const DeleteUser = async(req, res) =>{
    try {
        const data = await Users.deleteOne({_id : req.params.id})
        res.status(201).json({message: 'User successfully deleted !'})
    } catch (error) {
        console.log(error.message);
    }
}

module.exports={
    AddUser,
    FindOneUser,
    FindUsers,
    DeleteUser,
    UpdateUser 
}