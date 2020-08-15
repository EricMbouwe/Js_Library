const myLibrary = [];
const myBooks = document.getElementById('books');
const form = document.getElementById('form');
const showForm = document.getElementById('showForm')
const checkbox = document.getElementById('read');
const formToggle = document.getElementById('form-toggle');
const author = document.getElementById('author');
const title = document.getElementById('title');
const numPages = document.getElementById('numPages');
const cancelButton = document.getElementById('cancelBtn')

function Book(author, title, numPages, read) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;
}

const changeReadStatus = (index) => {
  const book = myLibrary[index];
  if (book.read === 'read') {
    book.read = 'unread';
    event.target.innerHTML = 'unread';
  } else {
    book.read = 'read';
    event.target.innerHTML = 'read';
  }
};

const displayForm = () => {
  showForm.classList.toggle('d-none');
};

const resetForm = () => {
  author.value = '';
  title.value = '';
  numPages.value = '';
  checkbox.checked = false;
};

const card = (item, index) => `<div class='card mx-3' style='width: 15rem;>
    <div class='card-body'>
    <h5 class='card-title'>${item.title}</h5>
    <h6 class='card-subtitle mb-2 text-muted'>${item.author}</h6>
    <p class='card-text'>
    ${item.numPages}
    </p>
    <button id="read-status" class='btn btn-primary card-text' onclick='changeReadStatus(${index})'>${item.read}</button>
    </div>
    <button type='button' id='delete-book' class='btn btn-danger' onclick='deleteBook(${index})'>Delete</button>
    </div>`;

const render = () => {
  const ele = document.createElement('div');
  for (let i = 0; i < myLibrary.length; i += 1) {
    const item = myLibrary[i];
    ele.innerHTML = card(item, i);
    myBooks.appendChild(ele);
  }
};

const deleteBook = (index) => {
  const response = window.confirm(// eslint-disable-line no-alert
    'Are you sure you want to remove this book?',
  );
  if (response === true) {
    myLibrary.splice(index, 1);
    event.target.parentNode.remove();
  }
};

const checkboxValue = () => {
  if (checkbox.checked === true) {
    return 'read';
  }
  return 'unread';
};

const addBookToLibrary = () => {
  const authorVal = author.value;
  const titleVal = title.value;
  const numPagesVal = numPages.value;
  const read = checkboxValue();

  const book = new Book(authorVal, titleVal, numPagesVal, read);

  myLibrary.push(book);

  localStorage.setItem('myLibrary', JSON.stringify(book));

  return false;
};

form.onsubmit = () => {
  addBookToLibrary();
  render();
  showForm.classList.toggle('d-none');
  resetForm();
};

cancelButton.onclick = displayForm;
formToggle.onclick = displayForm;
