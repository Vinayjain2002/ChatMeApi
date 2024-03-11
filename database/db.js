const mongoose= require("mongoose")


const connectDb= async ()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/ChatMe");
        console.log("Connected with the databse")
    }
    catch(err){
        console.log(`error while coneecting with the database ${err}`);
    }
}

module.exports= connectDb;
