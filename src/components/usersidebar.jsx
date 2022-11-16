import { Link } from 'react-router-dom'
import '../style/usersidebar.css';
const UserSideBar = () => {
    return ( 
        <div className="usersidebar">
             <div className="image">
                <div className="name">
                <img src="https://cdn.icon-icons.com/icons2/2556/PNG/96/profile_picture_user_icon_153075.png" alt="" />
                    <h3>User <p>user@gmail.com</p></h3>
                </div>
            </div>
            <div className="List">
                <ul className='lists'>
                    <li><Link className='li lio' to="/user_portal/">Home</Link></li>
                    <li><Link className='li li3' to="/user_portal/booklist">BookList</Link></li>
                    <li><Link className='li li4' to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default UserSideBar;