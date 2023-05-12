const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   
    lastname:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
   

});
module.exports = mongoose.model('Product',productSchema);