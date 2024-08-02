// Seleciona a navbar
const navbar = document.querySelector('.header');

// Função para verificar o scroll e adicionar/remover classe
function toggleNavbarColor() {
    // Altura da navbar
    const navbarHeight = navbar.offsetHeight;

    // Verifica se a página foi rolada além da altura da navbar
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
}




 // Dados do livro simulado (pode ser obtido via API)
 const booksData = [
    {
        "title": "Where the Crawdads Sing",
        "author": "Delia Owens",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s",
        "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique"
    }
    // Adicione mais objetos de livros aqui se necessário
];

function createBook(book) {
    const container = document.getElementById('book-list');
    
    if (container) { // Verifica se o container existe
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        
        const img = document.createElement('img');
        img.src = book.image; // Utiliza o código base64 diretamente
        img.alt = `imagem do livro ${book.title}`;
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'info-book';
        
        const titleSpan = document.createElement('span');
        titleSpan.className = 'title-book';
        titleSpan.textContent = book.title;
        
        const authorSpan = document.createElement('span');
        authorSpan.className = 'author-book';
        authorSpan.textContent = `by ${book.author}`;
        
        const introP = document.createElement('p');
        introP.className = 'intro-book';
        introP.textContent = book.intro;
        
        infoDiv.appendChild(titleSpan);
        infoDiv.appendChild(authorSpan);
        infoDiv.appendChild(introP);
        
        bookDiv.appendChild(img);
        bookDiv.appendChild(infoDiv);
        
        container.appendChild(bookDiv);
    } else {
        console.error('Element with id "book-list" not found.');
    }
}

// Adiciona todos os livros do JSON ao container
document.addEventListener('DOMContentLoaded', () => {
    booksData.forEach(book => createBook(book));
});

 