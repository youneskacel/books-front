import "./filters.css"
import { Input } from "antd"
import {useSelector,useDispatch} from 'react-redux'
import allActions from "../../Redux/Actions"


const Filters = ({styles}) => {
    const dispatch = useDispatch()
    const { title , author } = useSelector(state => state.filter )
    return (
        <div style={{...styles}}className="filters-container">
            <div className="filters-header">Filters</div>
            <div className="filters">
                <Input 
                    style={{height: 50, marginBottom: 35}}
                    placeholder="Search by title"
                    onChange={(event)=> {
                        //dispatch search by title action
                        dispatch(allActions.filterActions.searchByTitle(event.target.value)) 
                    }}/>
                    
                <Input
                    style={{height: 50, marginBottom: 35}}
                    placeholder="Search by author"
                    onChange={(event)=> {
                        //dispatch search by author action 
                        dispatch(allActions.filterActions.searchByAuthor(event.target.value)) 
                    }} />
                   
            </div>
        </div>
    )
}

export default Filters