import React from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
const  App =()=> {

  return (
    <div>
      <BrowserRouter>
        <Header/>
      <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route path='/cart' element={<Cart />} ></Route>
          {/* <Route path='/header' element={<Header/>} ></Route> */}
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
