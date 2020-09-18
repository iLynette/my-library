const myLibrary = [];
const shelf = document.getElementById('shelf')

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}
Book.prototype.info = function() {
  return this.title + 'by' + this.author + ',' + this.pages + 'pages,' + (this.readStatus ? 'read' : 'not read');
}


