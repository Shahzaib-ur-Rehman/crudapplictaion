const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Gender:String,
    status:String

})

const UserDB=mongoose.model('user',userSchema);

module.exports=UserDB;