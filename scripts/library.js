const myLibrary = [];
const myBooks = document.getElementById("books");

function Book(author, title, numPages, read = false) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;
}

const addItem = () => {
  const author = document.getElementById("author");
  const authorVal = author.value;

  const title = document.getElementById("title");
  const titleVal = title.value;

  const numPages = document.getElementById("numPages");
  const numPagesVal = numPages.value;

  if (!authorVal) {
    return alert("author can't be blank");
  }

  if (!titleVal) {
    return alert("title can't be blank");
  }

  if (!numPagesVal) {
    return alert("pages can't be blank");
  }

  const book = new Book(authorVal, titleVal, numPagesVal);
  myLibrary.push(book);
  render();
  reset(author, title, numPages);
  return false;
};

myBooks.addEventListener(
  "click",
  function (e) {
    var response = window.confirm(
      "Are you sure you want to remove this book??"
    );
    if (e.target && e.target.nodeName == "BUTTON" && response === true) {
      e.target.parentNode.remove();
      event.preventDefault;
    }
  },
  false
);

const reset = function (author, title, numPages) {
  author.value = "";
  title.value = "";
  numPages.value = "";
};

const render = function () {
  lastItem = myLibrary.slice(-1)[0];
  const card = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${lastItem.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${lastItem.author}</h6>
          <p class="card-text">
          ${lastItem.numPages}
          </p>
          <p class="card-text">
          ${lastItem.read}
          </p>
        </div>
        <button type="button" id="btn-danger" class="btn btn-danger">Delete</button>
       </div>`;
  const ele = document.createElement("div");
  ele.innerHTML = card;
  myBooks.appendChild(ele);
};
