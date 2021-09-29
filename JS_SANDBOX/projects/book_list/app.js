// Book Constructor
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Constructor
class UI {
  constructor() {}

  // Add book to list
  addBookToList(book) {
    const list = document.getElementById("book-list");

    // Create tr element
    const row = document.createElement("tr");

    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a = href="#" class = "delete">X<a></td>
    `;

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
}

// Event Listeners
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
    ui.showAlert("Please, fill in all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});
