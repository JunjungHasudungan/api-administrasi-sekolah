const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;

app.get("/api", (req, res)=> {
    res.send("hello word");
});

app.get('/api/roles', (req, res)=> {

})

app.listen(PORT, ()=> {
    console.log('server start on port: ' + PORT)
})