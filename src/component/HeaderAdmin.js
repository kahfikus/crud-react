import { Link } from "react-router-dom"

function HeaderAdmin(){

    function doLogout(){
        localStorage.removeItem("login")
        window.location = "/"
    }

    return(
        <> 
            Selamat Datang, {localStorage.getItem("login")}. 
            <a href="#" onClick={doLogout}>Logout</a>
            <br/>
            <Link to="/admin/member/tambah">Tambah Member</Link> | <Link to="/admin/">List Member</Link>
        </>
    )
}

export default HeaderAdmin