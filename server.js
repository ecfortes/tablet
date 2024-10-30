const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes/index");
const PORT = process.env.PORT || 80;

app.set("view engine", "ejs");

// Middleware para analisar requisições codificadas em URL
app.use(express.urlencoded({ extended: false }));

// Middleware para analisar requisições JSON
app.use(express.json());

// Servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static("public"));

// Rotas principais
app.use("/", routes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
