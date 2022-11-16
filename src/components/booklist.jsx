import { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../style/booklist.css'
const BookList = () => {
    let location = useLocation();
    let [books, setBooks] = useState([])
    useEffect(() =>{
        let fetchBooks= async ()=>{
            let response = await fetch("http://localhost:1001/books")
            let data = await response.json();
            setBooks(data);
            console.log(data);
        }
        fetchBooks();
   },[books])
   const handleDelete =(id)=>{
    fetch(`http://localhost:1001/books/${id}`,{
        method:'DELETE',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(books)
    })
    // window.location.reload();
   }
    return ( 
        <div className='booklist'>
            <h1>BookList {books.length}</h1>
            <div className="bookList">
                {books.map((data)=>{
                    return(
                    <div className="list">
                        <button className='btn'>{data.id}</button>
                        <h2>{data.title}</h2>
                        <p>{data.author}</p>
                        <p>{data.rating}</p>
                        {location.pathname === "/user_portal/booklist" ? null :(
                        <button className='btn1' onClick={()=>handleDelete(data.id)}>Delete</button>
                )}
                    </div>
                    )
                })}
            </div>
        </div>
     )
}
 
export default BookList;