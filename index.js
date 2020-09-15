const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.render("index");
});

// Carregando view engine (Precisa do diretório views)
app.set("view engine", "ejs");

// Configurando diretório de arquivos estáticos
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Servidor está rodando!");
});