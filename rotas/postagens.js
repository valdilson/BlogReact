const express = require("express");
const router = express.Router()

router.get("/postagens",(req, res)=>{
    res.json({
        titulo: "MEU PRIMEIRO POST",
        conteudo: "Esta é uma grande postaem",
        autor: "Valdilson"
    })
})
    



module.exports = router