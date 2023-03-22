let newBook = document.querySelectorAll(".new-book");
let closeModalButtons = document.querySelectorAll(".close-button");
let modal = document.querySelector(".modal");
let overlay = document.querySelector("#overlay");
let bookContent = document.querySelector(".book-content");
let addBook = document.querySelector("add-book");

let myLibrary = [];

function Book(title, author, pages, read, bookRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookRead = bookRead;
}

function render() {
    let libraryBook = document.querySelector(".library");
    for (let i = 0; i < myLibrary.length; i++) {
        // console.log(myLibrary[i]);
        let book = myLibrary[i];
        let newBook = document.createElement('div');
        newBook.innerHTML = `<p>${book.title}<p><p>${book.author}<p>`;
        libraryBook.appendChild(newBook);
    }
}
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    let bookRead = document.querySelector("#bookRead").checked;
    let newBookInfo = new Book(title, author, pages, read, bookRead);
    myLibrary.push(newBookInfo)
    render();
}

document.querySelector('#add-book').addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
})

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

// class Book {
//     constructor(title, author, pages, read, bookRead) {
//         this.title = title
//             .trim()
//             .split(" ")
//             .map((word) => {
//                 return word[0].toUpperCase() + word.substring(1).toLowerCase();
//             })
//             .join(" ");
//         this.author = author
//             .trim()
//             .split(" ")
//             .map((word) => {
//                 return word[0].toUpperCase() + word.substring(1).toLowerCase();
//             })
//             .join(" ");
//         this.pages = pages;
//         this.read = read;
//         this.bookRead = bookRead;
//     }
// }




// function addBookToLibrary() {
//     let newBook = new Book(
//     .value,
//         authorInput.value,
//         pagesInput.value,
//         readInput.value,
//         bookReadInput.checked
//     );
// }