import Usersidebar from './usersidebar'
import { Routes,Route } from 'react-router-dom'
import BookList from './booklist';
import Info from './info'
const UserPortal = () => {
    return ( 
        <div className="userportal">
            <Usersidebar />
            <Routes>
            <Route path="/" element={ <Info /> } />     
            <Route path="/booklist" element={ <BookList /> } />
          </Routes>
        </div>
    );
}
 
export default UserPortal;