export default class Book {
    constructor(title, author, medium) {
        this.title = title
        this.author = author
        this.medium = medium
    }

    getName() {
        return this.title
    }
}