import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = ()=>{

    return (
        <>

        <Link to="/products">Products</Link>

        <div>
            <Outlet/>
        </div>
        </>
    )

}

export default Layout;