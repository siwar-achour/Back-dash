const Vehicule= require('../model/vehicule');


//Get All products
const vehicule_all= async (req,res)=>{
    try{
        const vehicules = await Vehicule.find();
        res.json(vehicules);
    }catch(error){
        res.json({message:error});
    }

};

//Single product
const vehicule_details= async (req,res)=>{
    try{
        const vehicule = await Vehicule.findById(req.params.vehiculeId);
        res.json(vehicule);
    }catch(error){
        res.json({message:error});
    }
};

//Add new vehicule
const vehicule_create= async (req,res)=>{
    const vehicule =new Vehicule({
        matricule:req.body.matricule,
        categorie : req.body.categorie,
        status: req.body.status
    });
        try{
            const savedVehicule = await vehicule.save();
            res.send(savedVehicule);
        }catch(error){
            res.json({message:error});
        }
    
};

//Update product
const vehicule_update= async (req,res)=>{
    try{
    const vehicule = {
        matricule:req.body.matricule,
        categorie: req.body.categorie,
        status: req.body.status
    };
   
        const updateVehicule = await Vehicule.findByIdAndUpdate(
            {_id: req.params.vehiculeId},
            vehicule
        );
        res.json(updateVehicule);
    } catch(error){
        res.json({message:error});
    }
};

//Delete vehicule
const vehicule_delete= async (req,res)=>{
    try{
            const removeVehicule = await Vehicule.findByIdAndDelete(req.params.vehiculeId);
            res.json(removeVehicule);
        }catch(error){
            res.json({message:error});
        }
};



module.exports = {
    vehicule_all,
    vehicule_details,
    vehicule_create,
    vehicule_update,
    vehicule_delete
}