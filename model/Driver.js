const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
   
    lastname:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    documents:{
        pdf_data:String
    },
    vehiculeId:{
        type:Number
    }
   

});
module.exports = mongoose.model('Driver',driverSchema);