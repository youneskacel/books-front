const initialState = {
    title : "",
    author : ""
}

const filterReducer = (state=initialState , action) =>{
    switch (action.type) {
        case "SEARCH_BY_TITLE" :
            return {
                ...state,
                title: action.payload
            }
        case "SEARCH_BY_AUTHOR":
            return {
                ...state,
                author : action.payload
            }
        default : 
        return state
    }
}

export default filterReducer