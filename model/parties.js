const mongoose = require('mongoose');
const partiesSchema = new mongoose.Schema({ 

    name:{
        type:String,
        trim:true,
        require:true,
        maxlenth:32
    },
    password:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        trim:true,
        require:true,
        maxlenth:13
    },
    gst:{
        type:String,
        required:true,
    },
    outstand:{
        type:String,
        required:true,
    },
    pin:{
        type:Number,
        required:true,     
    },
    
    
},{timestamps:true})


module.exports = mongoose.model("Parties",partiesSchema);