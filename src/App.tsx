import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './components/Products';
import Item from './components/SingleProduct';


function App() {
  return (
   <>

   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/:id' element={<Item/>}></Route>
    </Route>
   </Routes>
   </>
  );
}

export default App;
