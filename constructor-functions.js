// Τεχνικά, όλα τα function της JavaScript λειτουργούν με το new

// uses this, return this

function Person(name) {
    this.name = name
}

const person = new Person("Alice")


function Counter() {
    this.count = 0    // public by default

    this.increment = function() {
        this.count++
    }

    this.getCount = function() {
        return this.count
    }
}

const counter = new Counter()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getCount())




function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.getInfo = function() {
        return `${this.title} by ${this.author}, ${this.year}`
    }
}

const book1 = new Book("JavaScript Essentials", "Athanasios Androutsos", "2022")
console.log(book1.getInfo())


class BookClass {
    constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.getInfo = function() {
        return `${this.title} by ${this.author}, ${this.year}`
    }
    }
}

const book2 = new BookClass("Python Essentials", "Stavros Angelopoulos", "2027")
console.log(book2.getInfo())

// Μετά την EcmaScript 2022
// private properties μέσω του #

class BookPrivate {
    #title
    #author
    #year

    constructor(title, author, year) {
        this.#title = title
        this.#author = author
        this.#year = year
    }
    getInfo() {
        return `${this.#title} by ${this.#author}, ${this.#year}`
    }
}

const book3 = new BookPrivate("SQL Basics", "Stavros Angelopoulos", "2035")
console.log(book3.getInfo())
