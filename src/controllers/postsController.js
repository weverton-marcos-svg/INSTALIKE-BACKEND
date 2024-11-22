import getTodosPosts from "../models/postsModels.js";

export async function listarPosts(req, res) {
    // Chama a função `getTodosPosts` para buscar todos os posts de forma assíncrona
    const posts = await getTodosPosts();
    // Envia uma resposta com código de status 200 (OK) e os dados dos posts em formato JSON
    res.status(200).json(posts);
} 