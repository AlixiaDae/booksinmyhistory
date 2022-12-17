export default class Library {
    constructor() {
        this.books = []
    }

    getBooks() {
        return this.books
    }

    constainsBook(newBook) {
        return this.books.some(book => book.title === newBook.title)
    }

    addBook(newBook) {
        if(this.books.find(book => book.title === newBook.title)) return
        this.books.push(newBook)
    }

    removeBook(bookTitle) {
        const bookToDelete = this.books.find(book => book.title === bookTitle)
        return this.books.splice(this.books.indexOf(bookToDelete), 1)
    }

}