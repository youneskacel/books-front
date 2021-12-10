import {Button , Modal , Input , Rate} from 'antd'
import {useDispatch,useSelector} from 'react-redux'
import allActions from '../../Redux/Actions'

const AddBook = () => {

    const dispatch = useDispatch()
    const {visible,newBook} = useSelector(state => state.book)
    return (
        <div>
            <Button
            size ="large"
            onClick={()=>{
                //make visible true
                dispatch(allActions.booksActions.updateVisible(true))
            }} >
                    Add new book
            </Button>

            <Modal
            title="Adde new book"
            visible={visible}
            onCancel={()=>{
                //action to make visible false
                dispatch(allActions.booksActions.updateVisible(false))
            }}
            onOk ={()=>{
                //add new book
                //make visible false
                dispatch(allActions.booksActions.updateVisible(false))
                dispatch(allActions.booksActions.addNewBook(newBook))
            }}
            >
                <Input
                style = {{ margin : 10}} 
                size ="large"
                placeholder="book title"
                 onChange={(event)=> {
                //     //upadate state of new book
                dispatch(allActions.booksActions.updateNewBook({...newBook,title : event.target.value}))

                 }}
                value={newBook.title}
                />

                <Input 
                style = {{ margin : 10}} 
                size ="large"
                placeholder="book author"
                onChange={(event)=> {
                //     //upadate state of new book
                dispatch(allActions.booksActions.updateNewBook({...newBook,author : event.target.value}))
                 }}
                value={newBook.author}
                />
                <Input
                style = {{ margin : 10}} 
                size ="large"
                placeholder="book description"
                 onChange={(event)=> {
                //     //upadate state of new book
                dispatch(allActions.booksActions.updateNewBook({...newBook,description : event.target.value}))
                 }}
                value={newBook.description}
                />
                <Rate
                style = {{ margin : 10}} 
                size ="large"
                
                 onChange={(value)=> {
                //     //upadate state of new book
                dispatch(allActions.booksActions.updateNewBook({...newBook,rating : value}))
                 }}
                value={newBook.rating}
                />

            </Modal>
        </div>
    )
}

export default AddBook
