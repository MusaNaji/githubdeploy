const express = require("express");
const app = express();
const PORT = process.env.PORT || 1889;
const signale = require("signale")
app.use(express.json());
app.use(express.static("client"))


app.listen(PORT,()=>{
    signale.info("Server running on port--> " + PORT);

});