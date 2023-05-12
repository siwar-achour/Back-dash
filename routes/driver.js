const router = require("express").Router();
const  driverController = require('../controllers/driverController');

 router.post("/",driverController.driver_create);
 router.get("/",driverController.driver_all);
 router.get("/:driverId",driverController.driver_details);
 router.put("/:driverId",driverController.driver_update);
 router.delete("/:driverId",driverController.driver_delete);


module.exports =router;