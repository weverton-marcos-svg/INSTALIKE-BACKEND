import { getTodosPosts, criarPost } from "../models/postsModels.js";
import fs from "fs";

// Função assíncrona para listar todos os posts
export async function listarPosts(req, res) {
    // Chama a função do modelo para buscar todos os posts
    const posts = await getTodosPosts();
    // Envia uma resposta com os posts em formato JSON
    res.status(200).json(posts);
}

// Função assíncrona para criar um novo post
export async function postarNovoPost(req, res) {
    // Obtém os dados do novo post a partir do corpo da requisição
    const novoPost = req.body;

    try {
        // Chama a função do modelo para criar o novo post
        const postCriado = await criarPost(novoPost);
        // Envia uma resposta com o post criado
        res.status(200).json(postCriado);
    } catch (erro) {
        // Caso ocorra um erro, loga o erro no console e envia uma resposta de erro
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

// Função assíncrona para fazer upload de uma imagem e criar um novo post
export async function uploadImagem(req, res) {
    // Cria um objeto com os dados do novo post, incluindo o nome da imagem
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        // Chama a função do modelo para criar o novo post
        const postCriado = await criarPost(novoPost);
        // Atualiza o nome da imagem com o ID do post criado
        const imgAtualizada = `uploads/${postCriado.insertedId}.png`;
        // Renomeia o arquivo da imagem com o novo nome
        fs.renameSync(req.file.path, imgAtualizada);
        // Envia uma resposta com o post criado
        res.status(200).json(postCriado);
    } catch (erro) {
        // Caso ocorra um erro, loga o erro no console e envia uma resposta de erro
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}