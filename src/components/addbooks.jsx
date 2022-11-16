import { useState } from "react";
import '../style/addbooks.css'
const Addbooks = () => {
    const [author,setAuthor] = useState('');
    const [title,setTitle] = useState('');
    const [rating,setRating] = useState('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const postBook={
            author,
            title,
            rating
        }
        const url = await fetch('http://localhost:1001/books',{
            method:'POST',
            headers:{ 'content-Type':'application/json'},
            body: JSON.stringify(postBook)
        })
        console.log(await url.json());
        window.confirm('added successfully')
        window.location.reload();
    }
    const reset=()=>{
        setAuthor('');
        setTitle('');
        setRating('');
    }
    return ( 
        <div className="addbook">
      <div className="formbook">
        <form action="/" className="addb" onSubmit={handleSubmit}>
          <div className="author">
            <h1>Add Book</h1>
            <label htmlFor="authorbook">Author</label>
            <input type="text" placeholder="Enter author Name" value={author} onChange={ (e)=>setAuthor(e.target.value)}/>
          </div>
          <div className="titlebook">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Enter title" value={title} onChange={ (e)=>setTitle(e.target.value) } />
          </div>
          <div className="ratingbook">
            <label htmlFor="rating">Rating</label>
            <input type="text" min={1} max={10} placeholder="Enter rating" value={rating} onChange={ (e)=>setRating(e.target.value)} />
          </div>
          <div className="userbtn">
           <div className="addbtn">
           <button>Add User</button>
           </div>
            <div className="resetbtn">
            <button className="fav1" type="reset" onClick={reset} >Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
         );
}
 
export default Addbooks