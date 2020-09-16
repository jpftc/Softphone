const express = require("express");
const app = express();
const AsteriskManager = require('asterisk-manager');
ami = new AsteriskManager("5038", "192.168.0.125", "user", "password", true);

app.get("/", (req, res) => {
    res.render("index");
});

ami.on('managerevent', function(evt) {});

// Carregando view engine (Precisa do diretório views)
app.set("view engine", "ejs");

// Configurando diretório de arquivos estáticos
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Servidor está rodando!");
});