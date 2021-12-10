import './App.css';
//import BookCard from './Components/BookCard';
import Filters from './Components/Filters';
import Header from './Components/Header/index'
import 'antd/dist/antd.css'
import axios from 'axios'
// import AddBook from './Components/addBook';
 import Books from './Components/Books';
 import {Routes , Route} from 'react-router-dom'
 import {useEffect} from 'react'



function App() {

  const getBooks = async () => {
    try{
      const res = await axios.get('http://localhost:4000/books')
      //const data = res.data
      console.log(res)
    }catch(err){
        console.log("error",err)
    }
  }

  useEffect(()=>{
    getBooks()
},[])
  return (
    <div className="App">
      <Routes>
        <Route path="/search/:title"  />
      </Routes>
     <Header />
     <div className="content">

     <Filters styles={{flex : 1}} />
     {/* <BookCard title="qlq chose" author="Maroua" rating={3} voters="854" description="Description" img="https://picsum.photos/200" />
     <AddBook /> */}
     <Books styles={{flex: 2}}/>
     </div>
    </div>
  );
}

export default App;
