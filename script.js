
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

const $library = document.querySelector("div.library__content")


function renderBook(book, index) {
    const newBook = document.createElement("div");
    newBook.classList.add("book");
    newBook.dataset.index = index;

    const title = document.createElement("h2");
    title.textContent = book["title"];
    
    const by = document.createElement("p");
    by.textContent = "by";

    const author = document.createElement("p");
    author.textContent = book["author"];

    const removeBook = document.createElement("button");
    removeBook.classList.add("removeBook");
    removeBook.textContent = "remove";

    newBook.appendChild(title);
    newBook.appendChild(by);
    newBook.appendChild(author);
    newBook.appendChild(removeBook);

    $library.appendChild(newBook)
}

function renderLibrary(library) {
    clearLibrary()
    for (let i = 0; i < library.length; i++) {
        renderBook(library[i], i)
    }
}

function clearLibrary() {
    $library.innerHTML = "";
}


// add single book to rendered library
// renderBook(Circe)

renderLibrary(myLibrary)


const addBookDialog = document.querySelector("dialog");
const addBookButton = document.querySelector("button.addBook");
const closeButton = document.querySelector("button.closeDialog")

$library.addEventListener("click", (e) => {
    if (e.target.classList.contains("removeBook")) {
        let index = getIndex(e)
        removeBookFromLibrary(index)
    }
    
})

function getIndex(eventTarget) {
    return eventTarget.target.parentElement.dataset.index
}


addBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
    console.log("open")
})

closeButton.addEventListener("click", () => {
    addBookDialog.close();
    console.log("close")
})

function clearBookDialog() {
    $titleInput.value = '';
    $authorInput.value =''
}

const $titleInput = document.querySelector("input#book_title")
const $authorInput = document.querySelector("input#book_author")

const submitBook = document.querySelector("button[type=submit]"); /* not sure I need this one?  */

const bookSubmissionForm = document.querySelector("form#newbook");

bookSubmissionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBook = new Book($titleInput.value, $authorInput.value, 123, "not read")
    console.log(newBook.info());
    addBookDialog.close();
    clearBookDialog();
    addBookToLibrary(newBook);
    renderLibrary(myLibrary);
})


function removeBookFromLibrary(bookIndex) {
    // wir müssen wissen, welchen Index das Buch in unserer Library hat. Dann entfernen wir es aus myLibrary
    myLibrary.splice(bookIndex, 1);
    // anschliessend rendern wir die Bücherei nochmal neu
    renderLibrary(myLibrary);
}
