let myLibrary = [];

// Object Constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let newBook;
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