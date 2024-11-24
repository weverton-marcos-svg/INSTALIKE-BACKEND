// Importa o framework Express para criar aplicações web
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Inicializa uma instância da aplicação Express
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor para escutar requisições na porta 3000
app.listen(3000, () => {
  console.log("Servidor escutando na porta 3000");
});

