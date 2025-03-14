const express = require("express")
const dotenv = require("dotenv")
dotenv.config();
const app = express();
const port = process.env.PORT || 5500;
app.get('/:id', (req,res)=>{
    const id = req.params.id ;
    res.send(`Hi your user id is ${id}`)
})
app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})