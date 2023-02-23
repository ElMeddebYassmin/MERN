const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
        Email: String,
        LastName: String,
        FirstName: String,
        Age: String
}, {timestamps: true}) // timestamp --> trace sur la bd dès chaque requete 





module.exports = mongoose.model('users', UserSchema)