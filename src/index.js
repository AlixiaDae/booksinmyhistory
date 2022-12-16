import Book from "./library modules/book";
import Library from "./library modules/library";

let library = new Library()
let bookOne = new Book('nya', '', 'online')
let bookTwo = new Book('this', '', 'physical')

library.addBook(bookOne)
library.addBook(bookTwo)
library.constainsBook(bookOne)
library.getBooks()

