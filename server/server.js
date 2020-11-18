const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=process.env.PORT || 5000;
const User=require("./models/User");
var cors = require('cors')

mongoose.connect('mongodb+srv://logan:1234@cluster0.x6qlj.mongodb.net/covid?retryWrites=true&w=majority', {useNewUrlParser: true}).then(data=>{
    console.log("Connected");
}).catch(Err=>{
    console.log(Err);
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/saveUser",async(req,res)=>{
    try { 
        const firstname=req.body.firstname;
    

        const user=new User({...req.body});
    
        await user.save();
        res.status(200).json({message:"Patient Saved"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error Occurred"});
    }
   

})

app.post("/getPatientData",async(req,res)=>{


    const data=await User.find({});
    res.status(200).json({data:data});
})

app.post("/deleteUser",async(req,res)=>{

    await User.deleteOne({_id:req.body.id});

    const data=await User.find({});
    res.status(200).json({message:"Deleted SuccessFully",data:data});



})


app.post("/editUser",async(req,res)=>{
  
    const data=req.body;
  

    await User.updateOne({_id:data._id},{$set:{firstname:data.firstname,lastname:data.lastname,email:data.email,
        requirements:data.requirements,phone:data.phone,address:data.address
    
    
    }});
    res.json({message:"Success"});
})
app.listen(port,()=>{
console.log(`Server Running on Port ${port}`)
})





