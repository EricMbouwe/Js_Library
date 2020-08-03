const myLibrary = [];
const myBooks = document.getElementById("books");
const newBook = document.getElementById("create-book");
const checkbox = document.getElementById("read");
const deleteBtn = document.getElementById("delete-book");
const formToggle = document.getElementById("form-toggle");


function Book(author, title, numPages, read) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;
  // this.id = counter();
}

Book.prototype.toggleRead =  function () {
  this.read = 'read'
}

// const counter = function () {
//   const count = 0;
//   ++count;
// }

const formDisplay = function () {
  newBook.classList.toggle("d-none");
  newBook.classList.add('centered')
  document.querySelector("body").classList.add('blured')
}

const resetForm = function (author, title, numPages, checkbox) {
  author.value = "";
  title.value = "";
  numPages.value = "";
  checkbox.checked = false;
};

const renderOne = function () {
  lastItem = myLibrary.slice(-1)[0];
  const card = `<div class='card mx-3' style='width: 15rem;'>
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

  const ele = document.createElement("div");
  ele.innerHTML = card;
  myBooks.appendChild(ele);
};

const renderAll = function () {
  myLibrary.forEach(book => {
    const card = `<div class='card mx-3' style='width: 15rem;'>
                  <div class='card-body'>
                    <h5 class='card-title'>${book.title}</h5>
                    <h6 class='card-subtitle mb-2 text-muted'>${book.author}</h6>
                    <p class='card-text'>
                    ${book.numPages}
                    </p>
                    <button value="${lastItem.read}" id="read-status" class='btn btn-primary card-text'>
                    ${book.read}
                    </button>
                  </div>
                  <button type='button' id='delete-book' class='btn btn-danger'>Delete</button>
                </div>`;

    const ele = document.createElement("div");
    ele.innerHTML = card;
    myBooks.appendChild(ele);
  });
}

document.querySelector("body").addEventListener("click", function (event, book) {
  if (event.target.id === "read-status") {
    var element = event.target;
    if (element.value == "unread") {
      element.value = "read";
      element.innerHTML = "read";
      // book.toggleRead();
    } else {
      element.value = "unread";
      element.innerHTML = "unread";
      // book.toggleRead();
    }
  }
});

document.querySelector("body").addEventListener("click", function (event) {
  if (event.target.id === "delete-book") {
    var response = window.confirm("Are you sure you want to remove this book?");
    if (event.target && response === true) {
      event.target.parentNode.remove();
      event.preventDefault;
    }
    false;
  }
});

const addBook = function () {
  const author = document.getElementById("author");
  const authorVal = author.value;

  const title = document.getElementById("title");
  const titleVal = title.value;

  const numPages = document.getElementById("numPages");
  const numPagesVal = numPages.value;

  const boxVal = function () {
    if (checkbox.checked == true) {
      return "read";
    }
    return "unread";
  };

  const book = new Book(authorVal, titleVal, numPagesVal, boxVal());
  myLibrary.push(book);

  localStorage.setItem('myLibrary', JSON.stringify(book));

  renderOne();
  resetForm(author, title, numPages, checkbox);
  newBook.classList.toggle("d-none");
  return false;  // stop submitting the form
};


if (localStorage.length > 0) {
  renderAll();
} else {
  //
}

newBook.onsubmit = addBook;
formToggle.onclick = formDisplay;

