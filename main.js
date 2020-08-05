let myLibrary = [];

// Object Constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

// creating books
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
const hp = new Book("Harry Potter", "Jk Rowling", 300, false)
// adding books to myLibrary
myLibrary.push(theHobbit);
myLibrary.push(hp);

let table = document.getElementById("myTable");

function render() {
    for (let i=0; i < myLibrary.length; i++) {
        let row = table.insertRow(i+1);
        row.insertCell(0).innerHTML = `${myLibrary[i].title}`
        row.insertCell(1).innerHTML = `${myLibrary[i].author}`
        row.insertCell(2).innerHTML = `${myLibrary[i].pages}`
        if (myLibrary[i].read) 
            row.insertCell(3).innerHTML = `Yes`;
        else
            row.insertCell(3).innerHTML = `No`;
    }
}
render();


// For pop up form
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 

// var form = document.getElementById("form-cont");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);
let form = document.getElementById("form-cont")
form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function clearTable() {
    for (let i = myLibrary.length; i>0; i--) {
        table.deleteRow(i);
    }
}

function addBook() {
    let titleValue = document.getElementById("title").value;
    let authorValue = document.getElementById("author").value;
    let pagesValue = document.getElementById("pages").value;
    let read = document.getElementById("yes").checked;
    let newBook = new Book(titleValue, authorValue, pagesValue, read);
    clearTable();
    addBookToLibrary(newBook);
    render();

}

// var form = document.getElementById("form-cont");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);