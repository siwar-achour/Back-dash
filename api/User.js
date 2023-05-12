const express = require('express');
const router = express.Router();
const User = require('./../model/User');

//password handler
const  bcrypt = require('bcrypt');
//signup
router.post('/signup',(req,res)=>{
    let{name,email,password}=req.body;
    name = name.trim();
    email=email.trim();
    password= password.trim();
 if(email==""|| password=="" || name ==""){
 res.json({
    status:"FAILED",
    message:"Empty input fields!"
 });
}else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
    res.json({
        status:"FAILED",
        message:"Invalid email entered"
    })

}else if (!/^[a-zA-Z]*$/.test(name)){
    res.json({
        status:"FAILED",
        message:"Invalid name entered"
    }) 
}else if (password.length<8){
    res.json({
        status:"FAILED",
        message:" Password is too short"
    })
}else{
User.find({email}).then(result=>{
  if(result.length){
    //user already exists
    res.json({
        status:"FAILED",
        message:"User with the provider email already exists"
    })
  }else{
    // try to create new user

    //password haaandling
    const saltRounds = 10 ;
    bcrypt.hash(password,saltRounds).then(hashedPassword =>{
        const newUser = new User({
            name,
            email,
            password:hashedPassword
        });
        newUser.save().then(result=>{
            res.json({
                status:"SUCCESS",
                message:"Sinup successful",
                data:result,
            })
        })
        .catch(err=>{
            res.json({
                status:"FAILED",
                message:"An error occured while hashing password"
            })
        })
    })
}
}).catch(err=>{
console.lof(err)
res.json({
    status:"FAILED",
    message:"An error occured while checking for existing user!"
})
})
}
});


//signin
router.post('/signin',(req,res)=>{
    let{email,password}=req.body;
    email=email.trim();
    password= password.trim();
 if(email==""|| password=="" ){
 res.json({
    status:"FAILED",
    message:"Empty credentials supplied"
 })
 } else {
    User.find({email})
    .then(data=>{
        if(data){
            //User exist
            const hashedPassword = data[0].password;
            bcrypt.compare(password,hashedPassword).then(result=>{
                if (result){
                    res.json({
                        status:"SUCCESS",
                        message:"Singin succeseful",
                        data : data
                    })
                  
                }  else{
                    res.json({
                        status:"FAILED",
                        message:"Invalid password etered"
                    })  
                }
            })
            .catch(err =>{
                res.json({
                    status:"FAILED",
                message:"Ah error occurred while comparing passwords"
                })
                        })
        }else{
            res.json({
                status:"FAILED",
                message:"Invalid credentiels entered"
    
            })
        }
    }).catch(err=>{
        res.json({
            status:"FAILED",
            message:"An error occured while checking for existing user"

        })
    })
 }
})


module.exports = router;
