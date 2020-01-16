const express = require("express");
const routes = require('./src/routes');
const PORT = 3333

const app = express();
app.use(express.json())
app.use(routes)


app.listen(PORT,()=>{
    console.log("server run on: http://localhost:"+ PORT)
})