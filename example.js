// Object Constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    if (this.read) 
        return `${this.title} by ${this.author}, ${this.pages} pages, has been read`
    else
        return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
}

// Object
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)

//// Inheritance 
// EighthGrader.prototype = Object.create(Student.prototype) 