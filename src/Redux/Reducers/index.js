import filterReducer from "./filterReducer";
import bookReducer from "./bookReducer";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    filter : filterReducer,
    book : bookReducer
})

export default rootReducer