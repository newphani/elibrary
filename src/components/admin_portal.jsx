import React from 'react'
import SideBar from'./sidebar'
import Info from '../components/info'
import '../style/adminportal.css'
import { Routes,Route } from 'react-router-dom';
import BookList from './booklist'
import AddBooks from './addbooks';
import Adduser from './adduser'
import UserList from './userlist'
const admin_portal = (props) =>{
    let email = props.data
  return (
    <div className='admin_portal'>
        <SideBar data={email}/>
        <Routes>
          <Route path="/" element={ <Info /> } />
          <Route path="/booklist" element={ <BookList /> } />
          <Route path="/addbooks" element={ <AddBooks /> } />
          <Route path="/adduser" element={ <Adduser /> } />
          <Route path="/userlist" element={ <UserList /> } />
        </Routes>
    </div>
  )
}

export default admin_portal