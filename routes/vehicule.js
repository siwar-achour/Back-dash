const router = require("express").Router();
const  vehiculeController = require('../controllers/vehiculeController');

 router.post("/",vehiculeController.vehicule_create);
 router.get("/",vehiculeController.vehicule_all);
 router.get("/:vehiculeId",vehiculeController.vehicule_details);
 router.put("/:vehiculeId",vehiculeController.vehicule_update);
 router.delete("/:vehiculeId",vehiculeController.vehicule_delete);


module.exports =router;