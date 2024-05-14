const mongoose=require('mongoose');

const db_url='mongodb://localhost:27017/hotels'

mongoose.connect(db_url)


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
