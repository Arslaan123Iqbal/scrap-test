const express = require("express");
const scrap = require("./routes/scrap");
const app = express();

app.use("/",scrap)

app.listen(3000,()=> {
    
})

module.exports = app;