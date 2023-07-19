let myLibrary = [];

function Book(author, title, pages, isRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.toggleRead = function () {
  return (this.isRead = !this.isRead);
};

function createBookCard(book) {
  const card = document.createElement("div");
  card.classList.add("book-card");

  const title = document.createElement("h2");
  title.textContent = book.title;
  card.appendChild(title);

  const author = document.createElement("p");
  author.textContent = "저자: " + book.author;
  card.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = "페이지 수: " + book.pages;
  card.appendChild(pages);

  const isRead = document.createElement("p");
  isRead.textContent = book.isRead ? "읽음" : "읽지 않음";
  card.appendChild(isRead);

  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("read-btn");
  toggleBtn.textContent = book.isRead ? "읽지 않음" : "읽음";
  toggleBtn.addEventListener("click", () => {
    book.toggleRead();
    isRead.textContent = book.isRead ? "읽음" : "읽지 않음";
    toggleBtn.textContent = book.isRead ? "읽지 않음" : "읽음";
  });
  card.appendChild(toggleBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", () => {
    card.remove();
  });
  card.appendChild(deleteBtn);

  return card;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  const bookshelf = document.querySelector("#book-shelf");
  const card = createBookCard(book);
  bookshelf.appendChild(card);
}

function displayBooks(books) {
  const bookshelf = document.querySelector("#book-shelf");
  bookshelf.innerHTML = "";

  books.forEach((book) => {
    const card = createBookCard(book);
    bookshelf.appendChild(card);
  });
}

const bookForm = document.querySelector("#book-form");
const bookshelf = document.querySelector("#book-shelf");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").checked;

  const newBook = new Book(author, title, pages, isRead);
  addBookToLibrary(newBook);
});

displayBooks(myLibrary);
