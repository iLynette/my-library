//book class which represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//UI class which handles UItasks
class UI {
  static displayBooks() {
    // const StoredBooks = [
    //   {
    //     title: 'Shoe Dog',
    //     author: 'Phil Knight',
    //     isbn: '33345387'
    //   },
    //   {
    //     title: 'Sands Of Time',
    //     author: 'Sidney Sheldon',
    //     isbn: '3334849'
    //   }
    // ];
    const books = StoredBooks;
    books.forEach((book) => UI.addBookToList(book)); 
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href"#" class="delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}
//store class which handles storage

//event to display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// event to add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {

  //prevent actual submit
  e.preventDefault();

  //get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  //validate
  if(title=== '' || author=== '' || isbn === '') {
    alert('please fillin all fieds');
  }else{
    //instantiate book
  const book = new Book(title, author, isbn);
  //console.log(book)

  //add book to ui
  UI.addBookToList(book);

  //clear field
  UI.clearFields();
  }
});

// event to remove a book
document.querySelector('#book-list').addEventListener('click',(e)=> {
  //console.log(e.target)
  UI.deleteBook(e.target);
})