import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./component/login";
import Admin from "./component/admin";
import User from "./component/user";
import ListUser from "./component/listUser";
import AddUser from "./component/addUser";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Login></Login>}></Route>
                <Route path={'/admin'} element={<Admin></Admin>}></Route>
                <Route path={'/user'} element={<User></User>}>
                    <Route path={'list'} element={<ListUser/>}></Route>
                    <Route path={'add'} element={<AddUser/>}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
