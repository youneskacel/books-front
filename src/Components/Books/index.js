
import "./books.css"
import {useEffect} from 'react'
import { useDispatch, useSelector} from "react-redux"
import allActions from "../../Redux/Actions"
import AddBook from "../addBook"
import BookCard from "../BookCard"
import axios from "axios"

const Books = ({styles}) => {
    
    //state: bookslist
    const {books} = useSelector(state=> state.book)
    const {title,author} = useSelector(state => state.filter)

    
    
    return (
        <div style={{...styles}}>
            <div className="add-book-container">
                <AddBook />
            </div>
            <div className="books-container">
                {  author===""&title==="" ? (
                    books.map((book, index) => (
                        <BookCard 
                            key={index}
                            title={book.title}
                            author={book.author}
                            rating={book.rating}
                            voters={book.voters}
                            description={book.description}
                            img={book.img}/>
                    ))) : (
                        author ==="" & title!=="" ? (
                            books.filter(e => e.title===title).map((book, index) => (
                                <BookCard 
                                    key={index}
                                    title={book.title}
                                    author={book.author}
                                    rating={book.rating}
                                    voters={book.voters}
                                    description={book.description}
                                    img={book.img}/>
                            ))
                        ) : (
                            author !=="" & title==="" ? (
                                books.filter(e => e.author===author).map((book, index) => (
                                    <BookCard 
                                        key={index}
                                        title={book.title}
                                        author={book.author}
                                        rating={book.rating}
                                        voters={book.voters}
                                        description={book.description}
                                        img={book.img}/>
                                ))
                            ) : (
                                books.filter(e => e.title===title && e.author === author).map((book, index) => (
                                    <BookCard 
                                        key={index}
                                        title={book.title}
                                        author={book.author}
                                        rating={book.rating}
                                        voters={book.voters}
                                        description={book.description}
                                        img={book.img}/>
                                ))
                            )
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Books