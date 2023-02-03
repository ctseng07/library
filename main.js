let newBook = document.querySelector(".new-book");
let modal = document.querySelector(".book-modal");
let overlay = document.querySelector("#overlay");
let bookContent = document.querySelector(".book-content");
let addBook = document.querySelector("add-book");

let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let readInput = document.querySelector("#read");
let bookReadInput = document.querySelector("#bookRead");

let myLibrary = [];

newBook.onClick = function () {
    addBook.style.display = "block";
};



// newBook.addEventListener(click, );

// function modal {

// }

class Book {
    constructor(title, author, pages, read, bookRead) {
        this.title = title
            .trim()
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.substring(1).toLowerCase();
            })
            .join(" ");
        this.author = author
            .trim()
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.substring(1).toLowerCase();
            })
            .join(" ");
        this.pages = pages;
        this.read = read;
        this.bookRead = bookRead;
    }
}




// function addBookToLibrary() {
//     let newBook = new Book(
//         titleInput.value,
//         authorInput.value,
//         pagesInput.value,
//         readInput.value,
//         bookReadInput.checked
//     );
// }