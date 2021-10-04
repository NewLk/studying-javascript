// Book object
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Local storage (LS) class
class Store {
  // Get book list from the LS
  static getBooks() {
    let books;

    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  // Add a book to the local storage
  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }

  // Display the list from the LS on the ui
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      const ui = new UI();

      ui.addBookToList(book);
    });
  }

  // Remove a book from the local storage
  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// UI class
class UI {
  constructor() {}

  // Add book to list
  addBookToList(book) {
    // Get book list
    const list = document.getElementById("book-list");

    // Create a row
    const row = document.createElement("tr");

    // Insert cols to the row
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class = "delete">X</a></td>
    `;

    // Append row to the list
    list.appendChild(row);
  }

  // Show alert
  showAlert(message, className) {
    // Create a div
    const div = document.createElement("div");

    // Create a class for the div
    div.className = `alert ${className}`;

    // Append a text child to the div
    div.appendChild(document.createTextNode(message));

    // Get the parent element
    const container = document.querySelector(".container");

    // Get the reference element
    const form = document.querySelector("#book-form");

    // Insert the div in the container above the form
    container.insertBefore(div, form);

    // Remove the alert after 3s
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  // CLear fields
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

  // Delete book from list
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
}

// DOM load event
document.addEventListener("DOMContentLoaded", Store.displayBooks);

// Event Listener for add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate the fields
  if (book.title === "" || book.author === "" || book.isbn === "") {
    // Show error alert
    ui.showAlert("Please, fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add book to LS
    Store.addBook(book);

    // Show success alert
    ui.showAlert("Book Added!", "success");

    // Clear fields
    ui.clearFields();
  }

  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.
  e.preventDefault();
});

// Event Listener for delete book
document.getElementById("book-list").addEventListener("click", function (e) {
  // Instantiate ui
  const ui = new UI();

  // Delete book from list
  ui.deleteBook(e.target);

  // Remove from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success alert
  ui.showAlert("Book Removed!", "success");

  e.preventDefault();
});
