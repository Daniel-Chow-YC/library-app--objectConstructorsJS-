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

// // creating default books 
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
// const hp = new Book("Harry Potter", "Jk Rowling", 300, false)
// // adding default books to myLibrary
// myLibrary.push(theHobbit);
// myLibrary.push(hp);

let table = document.getElementById("myTable");

function render() {
    saveToLocalStorage();
    for (let i=0; i < myLibrary.length; i++) {
        let row = table.insertRow(i+1);
        row.insertCell(0).innerHTML = `${myLibrary[i].title}`
        row.insertCell(1).innerHTML = `${myLibrary[i].author}`
        row.insertCell(2).innerHTML = `${myLibrary[i].pages}`
        if (myLibrary[i].read) 
            row.insertCell(3).innerHTML = `Yes`;
        else
            row.insertCell(3).innerHTML = `No`;
        row.insertCell(4).innerHTML = `<button input class="btn" onClick=Toggle()>Change Status</button>`
        row.insertCell(5).innerHTML = `<button input class="btn" onClick=Delete()>Remove</button>`
        
    }
}
loadFromLocalStorage();
render();

function Toggle() {
    for (let i=1; i<table.rows.length-1; i++) {
        table.rows[i].cells[4].onclick = function() {
            let index = this.parentElement.rowIndex;
            if (myLibrary[i-1].read) {
                myLibrary[i-1].read = false;
                clearTable();
                render();
            }
            else {
                myLibrary[i-1].read = true;
                clearTable();
                render();
            }
        }
    }      
}




function Delete() {
    for (let i=1; i<table.rows.length-1; i++) {
        table.rows[i].cells[5].onclick = function() {
            let index = this.parentElement.rowIndex;
            table.deleteRow(index);
            myLibrary.splice(index-1,1);
            saveToLocalStorage();
        }
    }
}





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


/* ------LOCAL STORAGE FUNCTIONS------ */

function saveToLocalStorage() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  }

// Load library from storage
function loadFromLocalStorage(){
    let loadedLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    // If empty library, load the default books and update library array, else, update library array with previous session library
    if(loadedLibrary === null || loadedLibrary === undefined || loadedLibrary.length == 0){
        loadDefaultBooks();
        saveToLocalStorage();
    }
    else {
        myLibrary = loadedLibrary;
        
    }
  }
  
 
function loadDefaultBooks() {
    const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
    const hp = new Book("Harry Potter", "Jk Rowling", 300, false)
    addBookToLibrary(theHobbit);
    addBookToLibrary(hp);

}