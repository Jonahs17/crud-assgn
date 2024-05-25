const User = require('../models/userModel.js');

exports.home=(req,res)=>{
    res.send('<h1>HOME PAGE</h1>');
}

exports.register= async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            throw new Error("All input fields are required");
        }
        if(await User.findOne({email})){
            throw new Error("User already exists");
        }
        const user = await User.create({
            name,
            email,
            password
        })

        res.status(201).json({
            success:true,
            message:"User registered successfully",
            user
        })
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            message:error.message,
            success:false
        });
    }
}

exports.login= async (req,res)=>{
    try{
        const {email,password}= req.body;
        if(!email||!password){
            throw new Error("All input fields are required");
        }

        const user=await User.findOne({email});
        if(!user){
            throw new Error("No account associate with this email");
        }

        if(password!=user.password){
            throw new Error("Password is wrong")
        }

        res.status(201).json({
            message:"User login successfully",
            success:true,
            user
            
        })


    }
    catch(error){
        console.log(error);
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}