const http = require("http");
const express = require('express');
const app = express();
const server = http.createServer(app);
const cors = require("cors");




//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@expressapi.xdbept9.mongodb.net/',
 {
   useNewUrlParser:true, useUnifiedTopology:true
 }).then(()=>{
    console.log('Conexion succes !')
 }).catch((error)=>{
  console.log('error');
 });

 

//Import routes
const UserRouter = require("./api/User");
const productRoutes = require("./routes/product");
const driverRoutes = require("./routes/driver");
const vehiculeRoutes = require("./routes/vehicule");
//Middlewares
app.use(express.json());
app.use(cors());
// route middlewares
app.use("/api/products", productRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/vehicules", vehiculeRoutes);
//
app.use('/user',UserRouter)




server.listen(3000 , () =>{
console.log("Server is runing at localhost :3000 ");
})

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2l3YXIiLCJhZ2UiOjIzLCJpYXQiOjE2ODM4MDc5MDIsImV4cCI6MTY4MzgxMTUwMn0.mMozgEBbBVPqRBgInd1mxSvlGxJGXr8grYi-I-bh5jw
