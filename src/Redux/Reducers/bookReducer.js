const newBook = {
    visible :false ,
    books : [
        {
            title: "title 1",
            author: "author 1",
            rating: 4,
            voters: 24,
            description: "this is book 1",
            img: "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png"
        },
        {
            title: "title 2",
            author: "author 2",
            rating: 2,
            voters: 29,
            description: "this is book 2",
            img: "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png"
        }
    ],
    newBook : {
        title :"",
        author : "",
        description : "" ,
        rating : "",
        
    },
    bookToAdd : {}
}

const bookReducer = (state = newBook , action) =>{
    switch (action.type) {
        case "UPDATE_VISIBLE":
            return {
                ...state,
                visible : action.payload
            }
        case "SETBOOKS" :
            return {
                ...state,
                books : action.payload
            }
        case "UPDATE_NEW_BOOK" :
            return {
                ...state ,
                newBook : action.payload
            }
        case "ADD_NEW_BOOK_TO_BOOKSLIST":
            return {
                ...state,
                books : [...state.books , action.payload]
            }
        default :
            return state
    }
}

export default bookReducer