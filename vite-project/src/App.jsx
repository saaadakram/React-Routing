import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About"
import Products from "./pages/Products"
import ProductDetails from './pages/ProductDetails'
import DefaultLayout from './layouts/DefaultLayout'

function App() {
  return (
   <>
   <Routes>
    <Route 
    path = "/"
    element = {
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    }>
    </Route>
    <Route path = "/" element = {<Home />}></Route>
    <Route path = "About" element = {<About />}></Route>
    <Route path = "Product" element = {<Products />}></Route>
    <Route path = "Product-details/:productID" element = {<ProductDetails />}></Route>
    <Route path='*' element= {<ErrorPage />}></Route>
   </Routes>
   </>
  )
}

export default App
