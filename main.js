let newBook = document.querySelectorAll(".new-book");
let closeModalButtons = document.querySelectorAll(".close-button");
let modal = document.querySelector(".modal");
let overlay = document.querySelector("#overlay");
let login = document.querySelector("#login");
// let bookContent = document.querySelector(".book-content");
// let addBook = document.querySelector("add-book");

let myLibrary = [];

function Book(title, author, pages, bookRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookRead = bookRead;
}

// Book Modal //

function newBookCard(item) {
    let libraryBook = document.querySelector(".library");
    libraryBook.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let newBook = document.createElement('div');
        let readBtn = document.createElement('button');
        newBook.setAttribute('class', "book-card");
        newBook.innerHTML = `
        <div class="card-header">
            <h1 class="title">"${book.title}"</h1>
            <h4 class="author">by ${book.author}</h4>
         </div>
         <div class="card-body">
            <p>${book.pages} pages total</p>
            <button class="toggle-read-btn" onClick="toggleRead(${i})">${book.bookRead ? "Finished" : "Not Finished Yet"}</button >
        <button class="remove-btn" onClick="removeBook(${i})">Remove</button>
        </div >
        `;
        // readBtn.classList.add('readBtn')
        // newBook.appendChild(readBtn);
        // if (item.bookRead === false) {
        //     readBtn.textContent = 'Not Read';
        //     readBtn.style.backgroundColor = '#e04f63';
        // } else {
        //     readBtn.textContent = 'Read';
        //     readBtn.style.backgroundColor = '#63da63'
        // };

        libraryBook.appendChild(newBook);
    }

}

// function bookStatus() {
//     if (bookRead === false) {
//         bookRead.textContent = 'Not Read';
//         bookRead.style.backgroundColor = '#e04f63';
//     } else {
//         bookRead.textContent = 'Read';
//         bookRead.style.backgroundColor = '#63da63'
//     }
// }

Book.prototype.toggleRead = function () {
    this.bookRead = !this.bookRead;
}
function toggleRead(index) {
    myLibrary[index].toggleRead();
    newBookCard();
    bookStatus();
    console.log(bookStatus);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    newBookCard()
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let bookRead = document.querySelector("#bookRead").checked;
    let newBookInfo = new Book(title, author, pages, bookRead);
    myLibrary.push(newBookInfo)
    newBookCard();
    setData();
}

document.querySelector('#add-book').addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
});

newBook.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
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

// setting Library to be stored in local storage
function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

//pulls books from local storage when page is refreshed
function restore() {
    if (!localStorage.myLibrary) {
        newBookCard();
    } else {
        let objects = localStorage.getItem('myLibrary') // gets information from local storage to use in below loop to create DOM/display
        objects = JSON.parse(objects);
        myLibrary = objects;
        newBookCard();
    }
}

restore();

// function loginBtn() {
//     login.addEventListener(click, () => {

//     });
// }

// function newBookCard() {
//     const display = document.querySelector(".library");
//     const books = document.querySelectorAll(".book");
//     books.forEach(book => display.removeChild(book));

//     for (let i = 0; i < myLibrary.length; i++) {
//         createBook(myLibrary[i]);
//     }
// }

// function createBook(item) {
//     const library = document.querySelector('.library');
//     const bookDiv = document.createElement('div');
//     const titleDiv = document.createElement('div');
//     const authDiv = document.createElement('div');
//     const pageDiv = document.createElement('div');
//     const removeBtn = document.createElement('button');
//     const readBtn = document.createElement('button');


//     bookDiv.classList.add('book');
//     bookDiv.setAttribute('id', myLibrary.indexOf(item));

//     titleDiv.textContent = item.title
//     titleDiv.classList.add('title');
//     bookDiv.appendChild(titleDiv);

//     authDiv.textContent = item.author;
//     authDiv.classList.add('author');
//     bookDiv.appendChild(authDiv);

//     pageDiv.textContent = item.pages;
//     pageDiv.classList.add('pages');
//     bookDiv.appendChild(pageDiv);

//     readBtn.classList.add('readBtn')
//     bookDiv.appendChild(readBtn);
//     if (item.read === false) {
//         readBtn.textContent = 'Not Read';
//         readBtn.style.backgroundColor = '#e04f63';
//     } else {
//         readBtn.textContent = 'Read';
//         readBtn.style.backgroundColor = '#63da63'
//     }

//     removeBtn.textContent = 'Remove';
//     removeBtn.setAttribute('id', 'removeBtn');
//     bookDiv.appendChild(removeBtn);

//     library.appendChild(bookDiv);

//     removeBtn.addEventListener('click', () => {
//         myLibrary.splice(myLibrary.indexOf(item), 1);
//         // setData()
//         newBookCard();
//     });

//     //add toggle ability to each book 'read' button on click
//     readBtn.addEventListener('click', () => {
//         item.read = !item.read;
//         // setData();
//         newBookCard();
//     });
// };

/* <button class="toggle-read-btn" onClick="toggleRead(${i})">${book.bookRead ? "Finished" : "Not Finished Yet"}</button> */ 