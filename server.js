const express = require("express");
const routes = require('./src/routes');
const cors = require('cors');
const PORT = 3333

const app = express();
app.use(cors());
app.use(express.json())
app.use(routes)


app.listen(PORT,()=>{
    console.log("server run on: http://localhost:"+ PORT)
})