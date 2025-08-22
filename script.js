let myLibrary = [
   new Book("Game of thrones:", "Goerge RR", 694),
   new Book("Game of thrones:", "Goerge RR", 694), 
   new Book("Game of thrones:", "Goerge RR", 694),
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

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
};

function addBookToLibrary() {
  const newTitle = document.querySelector('#title')
  const newAthour = document.querySelector('#author')
  const newPages = document.querySelector('#pages')
  const newBook = new Book(newTitle.value, newAthour.value, newPages.value)
  myLibrary.push(newBook)
  display(myLibrary);
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
      <button class="read">${card.getAttribute("value")==="false" ? "Read" : "Unread"}</button>
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
      book.toggleRead()
      cardElement.setAttribute("value", book.isRead)
      e.target.textContent = cardElement.getAttribute("value")==="false" ? "Read" : "Unread";
      
    })

    library.appendChild(card)
 
  });
}


document.querySelector('.input-button').addEventListener("click", (e) => {
  const inputDialog = document.querySelector('.input-dialog')
  inputDialog.showModal()
})

document.querySelector('#submit-book').addEventListener("click",addBookToLibrary);





let books = myLibrary;
display(books)
console.log(books)