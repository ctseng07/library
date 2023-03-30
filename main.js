let newBook = document.querySelectorAll(".new-book");
let closeModalButtons = document.querySelectorAll(".close-button");
let modal = document.querySelector(".modal");
let overlay = document.querySelector("#overlay");
let login = document.querySelector("#login");
let addBook = document.querySelector("#add-book");

let myLibrary = [];

function Book(title, author, pages, bookRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookRead = bookRead;
}

// Book Modal //

function newBookCard() {
    let libraryBook = document.querySelector(".library");
    libraryBook.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let newBook = document.createElement('div');
        // let readBtn = document.createElement('button');
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
        `
        libraryBook.appendChild(newBook);
    }

};

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let bookRead = document.querySelector("#bookRead").checked;
    let newBookInfo = new Book(title, author, pages, bookRead);
    myLibrary.push(newBookInfo)
    newBookCard();
    setData();
    addBook.reset();
}

addBook.addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
    closeModal(modal);
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
    });
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

//Book card functions

Book.prototype.toggleRead = function () {
    this.bookRead = !this.bookRead;
};

function toggleRead(index) {
    myLibrary[index].toggleRead(index);
    newBookCard();
};

function removeBook(index) {
    myLibrary.splice(index, 1);
    newBookCard()
}

// function bookStatus() {
//     if (bookRead === false) {
//         bookRead.textContent = 'Not Finished Yet';
//         bookRead.style.backgroundColor = '#e04f63';
//     } else {
//         bookRead.textContent = 'Finished';
//         bookRead.style.backgroundColor = '#63da63'
//     };
// };

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

// Login

// const auth = firebase.auth()
// const logInBtn = document.getElementById('#login')
// const logOutBtn = document.getElementById('logOutBtn')

// auth.onAuthStateChanged(async (user) => {
//     if (user) {
//         setupRealTimeListener()
//     } else {
//         if (unsubscribe) unsubscribe()
//         restoreLocal()
//         updateBooksGrid()
//     }
//     setupAccountModal(user)
//     setupNavbar(user)
// })

// const signIn = () => {
//     const provider = new firebase.auth.GoogleAuthProvider()
//     auth.signInWithPopup(provider)
// }

// const signOut = () => {
//     auth.signOut()
// }

// logInBtn.onclick = signIn
// logOutBtn.onclick = signOut
