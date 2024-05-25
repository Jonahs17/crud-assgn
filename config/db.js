const mongoose=require('mongoose');

const connectToDb= async ()=>{
    mongoose.connect(process.env.MONGOURI)
    .then((conn)=>{
        console.log("DB connected:",conn.connection.host);
    })
    .catch((err)=>{
        console.log("Error:",err);
        process.exit(1);
    });
}

module.exports=connectToDb;