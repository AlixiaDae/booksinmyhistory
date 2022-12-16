import '../style.css'
import Library from '../library modules/library'
import Book from '../library modules/Book'
import bookLogo from '../images/open-book.png'

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

    const navBar = document.createElement('nav')
    mainBody.appendChild(navBar)

    const logoWrapper = document.createElement('div')
    navBar.appendChild(logoWrapper)

    const logo = document.createElement('img')
    logo.src = bookLogo
    logoWrapper.appendChild(logo)

    const siteName = document.createElement('h1')
    siteName.textContent = 'My Alexandria'
    logoWrapper.appendChild(siteName)

    const addBookBtn = document.createElement('button')
    addBookBtn.id = 'add-book'
    addBookBtn.textContent = 'Add Book'
    navBar.appendChild(addBookBtn)

    addBookBtn.addEventListener('click', () => {

    })

    const shelf = document.createElement('div')
    shelf.classList.add('shelf')
    mainBody.appendChild(shelf)

    //Creates bookCards for each book
    function createBookCard() {
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
    }}

    createBookCard()

    return mainBody
})()

export default DOM