//import part
const express = require('express');
const router = express.Router();


//initializing data in variables
const founders = []  //In Memory Data Object
const VALID_STAGES = ["idea", "mvp", "revenue"];


//creating Api endpoints through express

//api to get requested data
router.post("/",(req,res) =>{
    const {email , name , stage} = req.body;

    //validate data [express acting as a middleware and validating data before sending req data]
    if(!name || name.trim() === "")
        return res.status(400).json({error:"Name is Required"})

    if(!email || email.trim() === "")
        return res.status(400).json({error:"Email is Required"})

    if(!stage || !VALID_STAGES.includes(stage))
        return res.status(400).json({error:`Stage must be selected from:${VALID_STAGES.join(",")}`})

    //creating an new founder obj after data is validated
    const founder = {
        id : require("crypto").randomUUID(),
        name : name.trim(),
        email : email.trim(),
        stage,
    }

    founders.push(founder);
    return res.status(201).json(founder);
});


//api endpoint to list all founders
router.get("/",(req,res) =>{
    return res.status(200).json(founders);
});

//api endpoint to get specific founder data with thier Uid
router.get("/:id",(req,res)=>{
    const data = founders.find( f => f.id === req.params.id);
    if(!data)
        return res.status(404).json({error:"No founder found with the uid"});

    return res.status(200).json(data);
});

module.exports = router;