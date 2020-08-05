const myLibrary = [];
const myBooks = document.getElementById('books');
const newBook = document.getElementById('create-book');
const checkbox = document.getElementById('read');
const formToggle = document.getElementById('form-toggle');
const author = document.getElementById('author');
const title = document.getElementById('title');
const numPages = document.getElementById('numPages');

function Book(author, title, numPages, read) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;
}

const formDisplay = () => {
  newBook.classList.toggle('d-none');
  newBook.classList.add('centered');
  document.querySelector('body').classList.add('blured');
};

const resetForm = () => {
  author.value = '';
  title.value = '';
  numPages.value = '';
  checkbox.checked = false;
};


const card = (lastItem) => `<div class='card mx-3' style='width: 15rem;'>
    <div class='card-body'>
    <h5 class='card-title'>${lastItem.title}</h5>
    <h6 class='card-subtitle mb-2 text-muted'>${lastItem.author}</h6>
    <p class='card-text'>
    ${lastItem.numPages}
    </p>
    <button value="${lastItem.read}" id="read-status" class='btn btn-primary card-text'>
    ${lastItem.read}
    </button>
    </div>
    <button type='button' id='delete-book' class='btn btn-danger'>Delete</button>
    </div>`;

const render = (lastItem) => {
  const ele = document.createElement('div');
  ele.innerHTML = card(lastItem);
  myBooks.appendChild(ele);
};

document.querySelector('body').addEventListener('click', (event) => {
  if (event.target.id === 'read-status') {
    const element = event.target;
    if (element.value === 'unread') {
      element.value = 'read';
      element.innerHTML = 'read';
    } else {
      element.value = 'unread';
      element.innerHTML = 'unread';
    }
  }
});

document.querySelector('body').addEventListener('click', (event) => {
  if (event.target.id === 'delete-book') {
    const response = window.confirm( // eslint-disable-line no-alert
      'Are you sure you want to remove this book?',
    );
    if (event.target && response === true) {
      event.target.parentNode.remove();
      const index = myLibrary.indexOf(this);
      myLibrary.splice(index, 1);
      event.preventDefault();
    }
  }
});

const boxVal = () => {
  if (checkbox.checked === true) {
    return 'read';
  }
  return 'unread';
};

const addBookToLibrary = () => {
  const authorVal = author.value;
  const titleVal = title.value;
  const numPagesVal = numPages.value;
  const read = boxVal();

  const book = new Book(authorVal, titleVal, numPagesVal, read);

  myLibrary.push(book);

  localStorage.setItem('myLibrary', JSON.stringify(book));

  return false;
};

newBook.onsubmit = () => {
  addBookToLibrary();
  const lastItem = myLibrary.slice(-1)[0];
  render(lastItem);
  newBook.classList.toggle('d-none');
  resetForm();
};

formToggle.onclick = formDisplay;
