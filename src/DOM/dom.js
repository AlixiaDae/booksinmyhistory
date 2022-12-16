import '../style.css'
import Library from '../library modules/library'
import Book from '../library modules/Book'

const DOM = (() => {
    let library = new Library()
    let bookOne = new Book(`Harry Potter and the Philosopher's Stone`, 'J.K. Rowling', 'physical')
    let bookTwo = new Book('Graceling', 'Kristin Cashore', 'physical')
    let bookThree = new Book('Three', '', 'online')

    library.addBook(bookOne)
    library.addBook(bookTwo)
    // console.log(library.constainsBook(bookThree))
    // library.getBooks()

    const mainBody = document.createElement('div')
    mainBody.classList.add('main-body')
    document.body.appendChild(mainBody)

    const shelf = document.createElement('div')
    shelf.classList.add('shelf')
    mainBody.appendChild(shelf)

    for(let i = 0; i < library.getBooks().length; i++) {
        const bookCard = document.createElement('div')
        bookCard.classList.add('bookcard')
        shelf.appendChild(bookCard)

        const bookTitle = document.createElement('p')
        bookTitle.textContent = library.getBooks()[i].title
        bookCard.appendChild(bookTitle)

        const bookAuthor = document.createElement('p')
        if(library.getBooks()[i].author === null) {
            bookAuthor.textContent = 'Unknown'
        } else {
            bookAuthor.textContent = library.getBooks()[i].author
        }
        bookCard.appendChild(bookAuthor)
    }

    return mainBody
})()

export default DOM