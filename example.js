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


//////////// Object Constructor Example 2 -- With Inheritance //////////////
function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    }
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  Person.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  }

// Inheritance
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.greeting = function() {
    alert(`Hello I am a teacher!`);
}

Object.defineProperty(Teacher.prototype, 'constructor', { 
    value: Teacher, 
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });

let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
// teacher1.name.first;
// teacher1.subject;
// teacher1.greeting()


/* ------Using Classes------ */



// Classes
class Books {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    info() {
        if (this.read)
            return `${this.title} by ${this.author}, ${this.pages} pages, has been read`
        else
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
    }
}

////////// Classes Example 2 -- with Inheritance ///////////

class Human {
    constructor(first, last, age, gender, interests) {
      this.name = {
        first,
        last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    greeting() {
      console.log(`Hi! I'm ${this.name.first}`);
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
}

class Lecturer extends Human {
    constructor(first, last, age, gender, interests, subject) {
        super(first, last, age, gender, interests);
  
      // subject is specific to Lecturer
        this.subject = subject;
    }

    greeting() {
        console.log(`Hi! I'm ${this.name.first}. I am a lecturer!`)
    }
}

let snape = new Lecturer('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts');