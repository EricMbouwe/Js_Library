let myLibrary = [];

function Book(author, title, numPages, read = false) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;
}

const addItem = () => {
  const author = document.getElementById('author');
  const authorVal = author.value;

  const title = document.getElementById('title');
  const titleVal = title.value;

  const numPages = document.getElementById('numPages');
  const numPagesVal = numPages.value;

  if (!authorVal) {
    return alert("author can't be blank");
  }

  const book = new Book(authorVal, titleVal, numPagesVal);
  return myLibrary.push(book);
};

// const render = function() {
//   myLibrary.forEach(item => {
//     //
//   });
// };

const btnForm = document.querySelector('button');

btnForm.addEventListener('click', addItem);