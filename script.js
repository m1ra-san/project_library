let myLibrary = [
  {
    title: "Game of thrones:",
    author: "Goerge RR",
    pages: 694,
  }, {
    title: "Game of thrones:",
    author: "Goerge RR",
    pages: 694,
  }, {
    title: "sdfafasfafsd",
    author: "asfafsaa",
    pages: 694,
  }
];


function Book(title, author, pages) {
  this.title = title,
    this.author = author,
    this.pages = pages,
    this.bookId = crypto.randomUUID();
    this.isRead = false,
    this.info = function () {
      return "The principal story chronicles the power struggle for the Iron Throne among the great Houses of Westeros following the death of King Robert in A Game of Thrones."
    }
}

function addBookToLibrary() {
  return myLibrary.map(item => new Book(item.title, item.author, item.pages));
}

function display(books) {
  const library = document.querySelector(".library")
  library.innerHTML = ""///clear div.library 

  books.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("card")
    card.setAttribute("data-index", book.bookId)
    card.setAttribute("value", book.isRead)

    card.innerHTML =
      `<h2>Title: ${book.title}</h2>
      <p>Author: ${book.author} </p>
      <div class="description">
      <p>Pages: ${book.info()}</p>
      <p>Pages: ${book.pages}</p>
      </div>
      <div>
      <button class="delete">Delete</button>
      <button class="read">Read</button>
      </div>`



    card.querySelector(".delete").addEventListener("click", (e) => {
      const cardElement = e.target.closest(".card");

      // card.remove();
      const idx = cardElement.getAttribute("data-index");
      let findIndex = books.findIndex(book => book.bookId === idx);
      books.splice(findIndex, 1);
      display(books);
    });

    card.querySelector(".read").addEventListener("click", (e) => {
      const cardElement = e.target.closest(".card");

      //Toggle
      book.isRead = !book.isRead
      console.log(book.isRead)
      console.log(books)

      e.target.textContent = book.isRead ? "Unread" : "Read";
      cardElement.setAttribute("value", book.isRead)
    })

    library.appendChild(card)
  });
}


document.querySelector('.input-button').addEventListener("click", (e) => {

  const inputDialog = document.querySelector('.input-dialog')
  inputDialog.showModal()
})

document.querySelector('#submit-book').addEventListener("click", (e) => {
  const newTitle = document.querySelector('#title')
  const newAthour = document.querySelector('#author')
  const newPages = document.querySelector('#pages')
  const newBook = {
    title: newTitle.value,
    author: newAthour.value,
    pages: newPages.value,
  };
  myLibrary.push(newBook)
  books = addBookToLibrary(myLibrary)
  display(books)
});




let books = addBookToLibrary(myLibrary);
display(books)
console.log(books)