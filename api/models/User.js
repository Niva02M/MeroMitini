const mongoose = require('mongoose');
const {Schema, model} =  mongoose;


const UserSchema = new Schema({
    username: {type: String, required: true, min:4, unique:true},
    password: {type: String, required: true, min:8},
    number: { type: String, required: true },
    email: { type: String, required: true },
    ward: { type: String, required: true },
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;