const express = require("express");
const PORT = 3333

const app = express();

app.get("/",(request, response)=>{
    return response.json({message: "hello oministack!!!" })
})


app.listen(PORT,()=>{
    console.log("server run on: http://localhost:"+ PORT)
})