
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

