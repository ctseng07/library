let newBook = document.querySelectorAll(".new-book");
let closeModalButtons = document.querySelectorAll(".close-button");
let modal = document.querySelector(".modal");
let overlay = document.querySelector("#overlay");
let bookContent = document.querySelector(".book-content");
let addBook = document.querySelector("add-book");

let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let readInput = document.querySelector("#read");
let bookReadInput = document.querySelector("#bookRead");

let myLibrary = [];

newBook.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
});


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


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