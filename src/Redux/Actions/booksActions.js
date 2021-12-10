
const updateVisible = (visible) => ({
    type: "UPDATE_VISIBLE",
    payload: visible
})

const setBooks = (books) => ({
    type: "SETBOOKS",
    payload: books
})

const updateNewBook = (book) => ({
    type: "UPDATE_NEW_BOOK",
    payload: book
})

const addNewBook = (bookToAdd) => ({
    type: "ADD_NEW_BOOK_TO_BOOKSLIST",
    payload: bookToAdd
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    updateVisible,
    setBooks,
    updateNewBook,
    addNewBook

}

