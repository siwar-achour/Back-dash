const mongoose = require('mongoose');

const vehiculeSchema = new mongoose.Schema({
    
    matricule:{
        type:String,
        required:true
    },
    categorie:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
   

});
module.exports = mongoose.model('Vehicule',vehiculeSchema);