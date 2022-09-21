const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Bem-vindo ao meu app");
})

app.get("/contato", (req, res) =>{
    res.send("Página de contato do meu app");
})

app.get("/produto", (req, res) =>{
    res.send("Página de produto do meu app");
})

//esta sempre deve ser a ultima linha qaundo usamos o express

app.listen(8081, () => {
    console.log("Servidor está funcionando na url http://localhost:8081")
});