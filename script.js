
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

const myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const Flowers = new Book("Flowers for Algernon", "Daniel Keyes", 238, "not read yet")
const Circe = new Book("Circe", "Madeline Miller", 333, "not read yet")

addBookToLibrary(Flowers);
addBookToLibrary(Circe);

console.log(myLibrary)


// Constants for DOM

const library = document.querySelector("div.library__content")

function renderBook(book) {
    const newBook = document.createElement("div");
    newBook.classList.add("book");
    
    const title = document.createElement("h2");
    title.textContent = book["title"];
    
    const by = document.createElement("p");
    by.textContent = "by";

    const author = document.createElement("p");
    author.textContent = book["author"];

    newBook.appendChild(title);
    newBook.appendChild(by);
    newBook.appendChild(author);

    library.appendChild(newBook)
}

function renderLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        renderBook(library[i])
    }
}

// add single book to rendered library
// renderBook(Circe)


renderLibrary(myLibrary)


const addBookDialog = document.querySelector("dialog");
const addBookButton = document.querySelector("button.addBook");
const closeButton = document.querySelector("button.closeDialog")

addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
})

closeButton.addEventListener("click", () => {
    addBookDialog.close();
})