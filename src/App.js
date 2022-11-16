import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/admin_login";
import User from "./components/user_login";
import "./App.css";
import Adminlogin from "./components/admin_login";
import Userlogin from "./components/user_login";
import Adminportal from "./components/admin_portal";
import Addbooks from "./components/addbooks";
import UserPortal from './components/user_portal'
// import Adduser from './components/adduser'
function App() {
  let email="admin@gmail.com"
  return (
    <div>
      {/* <Adduser /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin_login" element={<Admin />} />
          <Route path="/admin_login" element={<Adminlogin data={email}/>} />
          <Route path="/user_login" element={<Userlogin />} />
          <Route path="/admin_portal/*" element={<Adminportal data={email}/>} />
          <Route path="/user_portal/*" element={<UserPortal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
