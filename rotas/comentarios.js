const express = require("express");
const router = express.Router()

router.get("/comentarios/:postid",(req, res)=>{
    res.json({
        conteudo: "Gostei bastante  ",
        autor: "Autor 01"
    })
})
    



module.exports = router