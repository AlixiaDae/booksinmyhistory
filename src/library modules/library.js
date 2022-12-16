export default class Library {
    constructor() {
        this.books = []
    }

    getBooks() {
        console.log(this.books)
        return this.books
    }

    constainsBook(newBook) {
        return this.books.some(book => book.title === newBook.title)
    }

    addBook(newBook) {
        if(this.books.find(book => book.title === newBook.title)) return
        this.books.push(newBook)
    }

    removeBook(newBook) {
        let bookToBeDeleted = this.books.indexOf(newBook)
        this.books.splice(bookToBeDeleted, 1)
    }

}