const express = require("express");
const bodyparser = require("body-parser")


const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

const port  = 3001

app.get("/",(rec,res)=>{
    res.send("Its all OK")
})

const rotas = require("./rotas")
app.use("/api", rotas)



app.listen(port, ()=>{
    console.log("Server Runing LocalHost: ", port)
})