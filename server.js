import express from 'express';
const posts = [
    {   id: 1,
        descrição: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {   id: 2,
        descrição: "Gato curioso olhando pela janela",
        imagem: "https://placecats.com/millie/300/150"
    },
    {   id: 3,
        descrição: "Gatinho dormindo em uma caixa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {   id: 4,
        descrição: "Gatos brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
    },
    {   id: 5,
        descrição: "Gato com uma expressão engraçada",
        imagem: "https://placecats.com/millie/300/150"
    },
    {   id: 6,
        descrição: "Gato preto em um jardim",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();

app.use(express.json());
app.listen(3001 , () => {
    console.log('Server is running on port 3001');
});
app.get('/posts' , (req , res) => {
    res.status(200).json(posts);
});
function SearchPostById(id) {
    return posts.findIndex((post) => {
        // existe algum id 1 = 1 
        return post.id === Number(id);
    })
}
app.get('/posts/:id' , (req , res) => {
    const index = SearchPostById(req.params.id)
    // devolva da lista de posts somente o que tenha o index
    res.status(200).json(posts[index]);
});