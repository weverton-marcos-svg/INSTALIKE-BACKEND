// Importa o framework Express para criar aplicações web
import express from "express";
// Importa o multer para lidar com o upload de arquivos
import multer from "multer";
// Importa as funções para listar posts, criar novos posts e fazer upload de imagens
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controllers/postsController.js";
import cors from "cors";

const corsOption = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

// Configura o armazenamento de arquivos utilizando o multer
const storage = multer.diskStorage({
  // Define o diretório de destino para os arquivos
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  // Define o nome do arquivo a ser salvo
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Cria uma instância do multer com as configurações de armazenamento
const upload = multer({ dest: "./uploads" , storage });

// Função para configurar as rotas da aplicação
const routes = (app) => {
  // Configura o middleware para analisar dados JSON recebidos e torná-los utilizáveis
  app.use(express.json());
  app.use(cors(corsOption))
  // Define uma rota para listar todos os posts
  app.get("/posts", listarPosts);

  // Define uma rota para criar um novo post
  app.post("/posts", postarNovoPost);

  // Define uma rota para fazer upload de uma imagem
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id",atualizarNovoPost)
}

export default routes;