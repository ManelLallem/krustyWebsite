import React from 'react';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import HomePage from './component/HomePage';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Shop from './component/Shop';

function App(props) {
  return (
    <div>
       <BrowserRouter>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/Login"> Login</Link>
        <Link to="/SignUp"> SignUp</Link>
        <Link to="/Shop"> Shop</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;