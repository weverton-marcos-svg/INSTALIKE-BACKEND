// Importa a função para conectar ao banco de dados (assumida em './src/config/dbConfig.js')
import conectarAoBanco from "../config/dbConfig.js";

// Estabelece uma conexão com o banco de dados usando a variável de ambiente `process.env.STRING_CONEXAO` 
// (substitua com sua string de conexão real)
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Define uma função assíncrona chamada `getTodosPosts` para recuperar todos os posts do banco de dados
export async function getTodosPosts() {
    // Acessa o banco de dados chamado "imersao-instabyte"
    const db = conexao.db("imersao-instabyte");
  
    // Obtém a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
  
    // Encontra todos os documentos na coleção "posts" e os converte para um array
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
     const db = conexao.db("imersao-instabyte");
     const colecao = db.collection("posts");
     return colecao.insertOne(novoPost);
} 