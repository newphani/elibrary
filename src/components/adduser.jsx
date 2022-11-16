import "../style/adduser.css";
import { useState,useNavigate } from "react";
const AddUser = () => {
  const [name,setName] = useState('');
  const [email,setEmail] =useState('');
  // const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    let postUser = {
      name,
      email
    }
    const url = await fetch('http://localhost:1001/users',{
      method:'POST',
      headers: {'content-type': 'application/json'},
      body:JSON.stringify(postUser)
    })
    console.log(await url.json());
    window.confirm('added successfully');
    // navigate('/')
  }
  const reset = ()=>{
    setName('');
    setEmail('');
  }
  return (
    <div className="adduser">
      <div className="form">
        <form action="/" className="add" onSubmit={handleSubmit}>
          <div className="fname">
            <h1>Add User</h1>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter First Name" value={name} onChange={ (e)=>setName(e.target.value)}/>
          </div>
          <div className="emailid">
            <label htmlFor="email">email</label>
            <input type="text" placeholder="Enter email" value={email} onChange={ (e)=>setEmail(e.target.value) } />
          </div>
          <div className="userpassword">
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Enter password" />
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
};

export default AddUser;
