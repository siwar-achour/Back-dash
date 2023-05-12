const router = require("express").Router();
const  productController = require('../controllers/productController');

 router.post("/",productController.product_create);
 router.get("/",productController.product_all);
 router.get("/:id",productController.product_details);
 router.put("/:id",productController.product_update);
 router.delete("/:id",productController.product_delete);


module.exports =router;