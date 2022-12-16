import '../style.css'
import Library from '../library modules/library'
import Book from '../library modules/Book'
import bookLogo from '../images/open-book.png'

const DOM = (() => {
    let library = new Library()
    let bookOne = new Book(`Harry Potter and the Philosopher's Stone`, 'J.K. Rowling', 'physical')
    let bookTwo = new Book('Graceling', 'Kristin Cashore', 'physical')
    let bookThree = new Book('Magyk', 'Angie Sage', 'physical')

    library.addBook(bookOne)
    library.addBook(bookTwo)
    library.addBook(bookThree)
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
    addBookBtn.textContent = '+ Add Book'
    navBar.appendChild(addBookBtn)

    //Form for adding new books
    const addBookForm = document.createElement('form')
    addBookForm.style.display = 'none'
    mainBody.appendChild(addBookForm)
    
    const addBookField = document.createElement('fieldset')
    addBookForm.appendChild(addBookField)

    const addBookLegend = document.createElement('legend')
    addBookLegend.textContent = 'New Book'
    addBookField.appendChild(addBookLegend)

    const addBookTitleWrapper = document.createElement('div')
    addBookField.appendChild(addBookTitleWrapper)

    const addBookTitleLabel = document.createElement('label')
    addBookTitleLabel.setAttribute('for', 'title')
    addBookTitleLabel.textContent = 'Title:'
    addBookTitleWrapper.appendChild(addBookTitleLabel)

    const addBookTitle = document.createElement('input')
    addBookTitle.name = 'name'
    addBookTitle.id = 'name'
    addBookTitleWrapper.appendChild(addBookTitle)
    
    const addBookAuthorWrapper = document.createElement('div')
    addBookField.appendChild(addBookAuthorWrapper)

    const addBookAuthorLabel = document.createElement('label')
    addBookAuthorLabel.setAttribute('for', 'author')
    addBookAuthorLabel.textContent = 'Author:'
    addBookAuthorWrapper.appendChild(addBookAuthorLabel)

    const addBookAuthor = document.createElement('input')
    addBookAuthor.name = 'author'
    addBookAuthor.id = 'author'
    addBookAuthorWrapper.appendChild(addBookAuthor)

    const addBookMediumWrapper = document.createElement('div')
    addBookField.appendChild(addBookMediumWrapper)

    const physicalRadioWrapper = document.createElement('div')
    addBookMediumWrapper.appendChild(physicalRadioWrapper)

    const physicalRadio = document.createElement('input')
    physicalRadio.setAttribute('type', 'radio')
    physicalRadio.name = 'medium'
    physicalRadio.id = 'physical'
    physicalRadioWrapper.appendChild(physicalRadio)

    const physicalRadioLabel = document.createElement('label')
    physicalRadioLabel.setAttribute('for','physical')
    physicalRadioLabel.textContent = 'Physical Copy'
    physicalRadioWrapper.appendChild(physicalRadioLabel)

    const onlineRadioWrapper = document.createElement('div')
    addBookMediumWrapper.appendChild(onlineRadioWrapper)

    const onlineRadio = document.createElement('input')
    onlineRadio.setAttribute('type', 'radio')
    onlineRadio.name = 'medium'
    onlineRadio.id = 'online'
    onlineRadioWrapper.appendChild(onlineRadio)

    const onlineRadioLabel = document.createElement('label')
    onlineRadioLabel.setAttribute('for', 'online')
    onlineRadioLabel.textContent = 'Online Copy'
    onlineRadioWrapper.appendChild(onlineRadioLabel)

    const addBookSubmitBtn = document.createElement('button')
    addBookSubmitBtn.id = 'submit-new-book'
    addBookSubmitBtn.textContent = 'Add new book'
    addBookField.appendChild(addBookSubmitBtn)

    addBookSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const title = addBookTitle
        const author = addBookAuthor
        let medium  = ''
        if(physicalRadio.checked) {
            medium = physicalRadio
        } else {
            medium = onlineRadio
        }
        if(title.value === '') return
        if(author.value === '') {
            author.value = 'Unknown'
        }
        const newBook = new Book(title.value,author.value, medium.id)
        if(library.constainsBook(newBook)) return
        library.addBook(newBook)
        console.log(medium.id)
        shelf.textContent = ''
        title.value = ''
        author.value = ''
        physicalRadio.checked = false
        onlineRadio.checked = false
        createBookCard()
    })


    addBookBtn.addEventListener('click', () => {
        if(addBookForm.style.display === 'flex') {
            addBookForm.style.display = 'none'
        } else {
            addBookForm.style.display = 'flex'
        }
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