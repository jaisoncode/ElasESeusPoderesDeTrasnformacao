// Script específico para a página de livros (books.html)

// Exemplo de código para manipular a lista de livros e o formulário de adição

// Simulação de dados de livros (pode ser substituído por uma chamada AJAX ao backend)
let booksData = [
    { id: 1, title: "Livro 1", author: "Autor 1", description: "Descrição do Livro 1" },
    { id: 2, title: "Livro 2", author: "Autor 2", description: "Descrição do Livro 2" }
];

// Função para exibir livros na lista
function showBooks() {
    const booksList = document.getElementById('books');

    booksData.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${book.title}</strong> - ${book.author}<br>${book.description}`;
        booksList.appendChild(li);
    });
}

// Chamando a função para mostrar os livros ao carregar a página
document.addEventListener('DOMContentLoaded', showBooks);

// Formulário de adição de livro
const bookForm = document.getElementById('book-form');

bookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores do formulário
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const description = document.getElementById('description').value;

    // Simulação de adição de livro (pode ser substituído por AJAX ao backend)
    const newBook = {
        id: booksData.length + 1,
        title: title,
        author: author,
        description: description
    };

    booksData.push(newBook);

    // Limpar o formulário
    bookForm.reset();

    // Atualizar a lista de livros exibida
    showBooks();
});
