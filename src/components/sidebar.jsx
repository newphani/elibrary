import { Link } from 'react-router-dom'
import React from 'react';
import '../style/sidebar.css';
const SideBar = (props) => {
    return ( 
        <div className="sidebar">
            <div className="image">
                <div className="name">
                <img src="https://cdn.icon-icons.com/icons2/2556/PNG/96/profile_picture_user_icon_153075.png" alt="" />
                    <h3>Admin {props.data}</h3>
                </div>
                {/* <div className="email">
                    <p>{props.email}</p>
                </div> */}
            </div>
            <div className="List">
                <ul className='lists'>
                    <li><Link className='li li1' to="/admin_portal/">Home</Link></li>
                    <li><Link className='li li1' to="/admin_portal/adduser">AddUser</Link></li>
                    <li><Link className='li li1' to="/admin_portal/addbooks">AddBooks</Link></li>
                    <li><Link className='li li1' to="/admin_portal/booklist">BookList</Link></li>
                    <li><Link className='li li1' to="/admin_portal/userlist">UserList</Link></li>
                    <li><Link className='li li1' to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default SideBar;