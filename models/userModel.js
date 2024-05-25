const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is mandatory'],
        maxLength:[30,'Maximum 30 chars']
    },
    email:{
        type:String,
        required:[true,"email is mandatory"],
        maxLength:[40,"Maximum 40 chars"],
        unique:[true,"email already in use"]
    },
    password:{
        type:String,
        required:[true,"password is mandatory"],
        maxLength:[20,"Maximum 20 chars"],
    }
});

module.exports=mongoose.model("User",userSchema);