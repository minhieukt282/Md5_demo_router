import {Link, Outlet, useLocation} from "react-router-dom";

export default function User(){
    const username = useLocation();
    console.log(username)
    return (
        <>
            <h1>User page</h1>
            <hr/>
            <h1>Xin chào {username && username.state}</h1>
            <Link to={'/'}>Logout</Link> |
            <Link to={'list'}>List</Link> |
            <Link to={'add'}>Add</Link>
            <Outlet></Outlet>
        </>
    )
}