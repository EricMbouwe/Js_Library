const myLibrary = [];
const myBooks = document.getElementById("books");
const newBook = document.getElementById("create-book");
const checkbox = document.getElementById("read");
const deleteBtn = document.getElementById("delete-book");
const formToggle = document.getElementById("form-toggle");

// if(!localStorage.length == 0 {
//   populateStorage();
// } else {
//   setStyles();
// }

function Book(author, title, numPages, read) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;
}

const formDisplay = function () {
  newBook.classList.toggle("d-none");
}

const resetForm = function (author, title, numPages, checkbox) {
  author.value = "";
  title.value = "";
  numPages.value = "";
  checkbox.checked = false;
};

const render = function () {
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

document.querySelector("body").addEventListener("click", function (event) {
  if (event.target.id === "read-status") {
    var element = event.target;
    if (element.value == "unread") {
      element.value = "read";
      element.innerHTML = "read";
    } else {
      element.value = "unread";
      element.innerHTML = "unread";
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

  if (!authorVal) {
    return alert("author can't be blank");
  }

  if (!titleVal) {
    return alert("title can't be blank");
  }

  if (!numPagesVal) {
    return alert("pages can't be blank");
  }

  const book = new Book(authorVal, titleVal, numPagesVal, boxVal());
  myLibrary.push(book);

  localStorage.setItem('myLibrary', JSON.stringify(book));

  render();
  resetForm(author, title, numPages, checkbox);
  return false;
};

newBook.onsubmit = addBook;
formToggle.onclick = formDisplay;

