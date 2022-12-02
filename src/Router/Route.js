import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Carrrers from '../pages/Carrrers'
import Home from '../pages/Home'
import Pricing from '../pages/Pricing'
import Service from '../pages/Service'
import SignUp from '../pages/SignUp'
const Router = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' >
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Service' element={<Service />} />
      <Route path='Pricing' element={<Pricing />}/>
      <Route path='Carrers' element={<Carrrers />}/>
      <Route path='SignUp' element={<SignUp />} />
    </Route>
   </Routes>

   </BrowserRouter>
   </>
  )
}

export default Router;