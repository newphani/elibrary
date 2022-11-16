import { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../style/userlist.css'
const UserList = () => {
    let location = useLocation();
    let [users, setUsers] = useState([])
    useEffect(() =>{
        let fetchBooks= async ()=>{
            let response = await fetch("http://localhost:1001/users")
            let data = await response.json();
            setUsers(data);
            console.log(data);
        }
        fetchBooks();
   },[users])
   const handleDelete =(id)=>{
    fetch(`http://localhost:1001/books/${id}`,{
        method:'DELETE',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(users)
    })
    window.location.reload();
   }
    return ( 
        <div className='booklist'>
            <h1>UserList {users.length}</h1>
            <div className="bookList">
                {users.map((data)=>{
                    return(
                    <div className="list">
                        <button className='btn'>{data.id}</button>
                        <h2>{data.name}</h2>
                        <p>{data.email}</p>
                        {/* <p>{data.rating}</p> */}
                        {location.pathname === "/user_portal/userlist" ? null :(
                        <button className='btn1' onClick={()=>handleDelete(data.id)}>Delete</button>
                )}
                    </div>
                    )
                })}
            </div>
        </div>
     )
}
 
export default UserList;