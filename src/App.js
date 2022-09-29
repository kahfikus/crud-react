import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Route,Switch} from "react-router-dom";
import Home from './pages/guest/Home';
import Register from './pages/guest/Register';
import Login from './pages/guest/Login'
import "antd/dist/antd.css";
import HeaderGuest from './component/HeaderGuest';
import HeaderAdmin from './component/HeaderAdmin';
import ListMember from './pages/admin/ListMember';
import UbahMember from './pages/admin/UbahMember';
import TambahMember from './pages/admin/TambahMember';

function App() {
  var header;
  if(localStorage.getItem("login")==null){
    header = <HeaderGuest/>
  }else{
    header = <HeaderAdmin/>
  }
  return (
    <>
      <BrowserRouter>
        {header}
        <br/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/admin">
            <ListMember/>
          </Route>
          <Route path="/admin/member/ubah/:id">
            <UbahMember/>
          </Route>
          <Route path="/admin/member/tambah">
            <TambahMember/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
