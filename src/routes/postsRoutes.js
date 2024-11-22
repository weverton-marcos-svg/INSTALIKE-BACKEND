// Importa o framework Express para criar aplicações web
import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Configura o middleware para analisar dados JSON recebidos e torná-los utilizáveis
    app.use(express.json());

    // Define um manipulador de rotas para requisições GET para o endpoint "/posts"
    app.get("/posts",listarPosts);
}

export default routes; 