const mongoose=require('mongoose');
require('dotenv').config();

// const db_url='mongodb://localhost:27017/hotels'
const mongoURL=process.env.mongoDB_URL;

mongoose.connect(mongoURL);


const db=mongoose.connection;

db.on('connected',(req,res)=>{
    console.log("My databse is connected")
    
})

db.on("error", (error) => {
    console.error("Error in establishing database:", error.message);
  });

db.on("disconnected",()=>{
    console.log("MongoDB disconnected");
})


module.exports=db;
