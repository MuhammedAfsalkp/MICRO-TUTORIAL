const express = require('express')
const app = express();
const sendEmail = require('./awsEmail')

app.get("/",(req,res)=>{
    sendEmail();
    res.send("welcome")
})
app.listen(4000,()=> console.log("Server listening on port 3000"))