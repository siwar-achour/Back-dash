const Driver = require('../model/Driver');


//Get All driverss
const driver_all= async (req,res)=>{
    try{
        const drivers = await Driver.find();
        res.json(drivers);
    }catch(error){
        res.json({message:error});
    }

};

//Single driver
const driver_details= async (req,res)=>{
    try{
        const driver = await Driver.findById(req.params.driverId);
        res.json(driver);
    }catch(error){
        res.json({message:error});
    }
};

//Add new driver
const driver_create= async (req,res)=>{
    const driver =new Driver({
        firstname:req.body.firstname,
        lastname : req.body.lastname,
        phone : req.body.phone,
        documents : req.body.documents,
        id_vehicule : req.body.id_vehicule,
    });
        try{
            const savedDriver = await driver.save();
            res.send(savedDriver);
        }catch(error){
            res.json({message:error});
        }
    
};

//Update driver
const driver_update= async (req,res)=>{
    try{
    const driver = {
        firstname:req.body.firstname,
        lastname : req.body.lastname,
        phone : req.body.phone,
        documents : req.body.documents,
        id_vehicule : req.body.id_vehicule,
    };
   
        const updateDriver = await Driver.findByIdAndUpdate(
            {_id: req.params.driverId},
            driver
        );
        res.json(updateDriver);
    } catch(error){
        res.json({message:error});
    }
};

//Delete driver
const driver_delete= async (req,res)=>{
    try{
            const removeDriver = await Driver.findByIdAndDelete(req.params.driverId);
            res.json(removeDriver);
        }catch(error){
            res.json({message:error});
        }
};



module.exports = {
   driver_all,
   driver_details,
   driver_create,
   driver_update,
   driver_delete
}