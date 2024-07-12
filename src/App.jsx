import React from 'react'
import LoginPage from './Component/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateAccount from './Component/CreateAccount'
import Home from './Component/Home'
import BuissnessPage from './Component/BuissnessPage'
import Stocks from './Component/Stocks'

const App = () => {
  return (
    <>
     
      <BrowserRouter>
         <Routes>  
          <Route element={<LoginPage />} path=''/>
          <Route element={<CreateAccount />} path='/createaccount' />
          <Route element={<Home />} path='/home/*'/>
          <Route element={<BuissnessPage />}path='/buisspage' />
          <Route element={<Stocks />} path='/stocks' />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
