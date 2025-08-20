const myLibrary = [
    {title:"Game of thrones:",
        author:"Goerge RR",
        pages:694,
    },    {title:"Game of thrones:",
        author:"Goerge RR",
        pages:694,
    },    {title:"sdfafasfafsd",
        author:"asfafsaa",
        pages:694,
    }
];


function Book(title,author,pages) {
  this.title=title,
  this.author=author,
  this.pages=pages,
  this.bookId = crypto.randomUUID();
}

function addBookToLibrary() {
  return myLibrary.map(item => new Book(item.title, item.author, item.pages));
}

function display(books){

}


const books = addBookToLibrary();
console.log(books)