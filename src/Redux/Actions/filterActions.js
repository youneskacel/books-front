const searchByTitle = (title) => ({
    type: "SEARCH_BY_TITLE",
    payload: title
})

const searchByAuthor= (author) => ({
    type: "SEARCH_BY_AUTHOR",
    payload: author
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    searchByTitle,
    searchByAuthor
}