import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Navbarpanel from './components/Navbarpanel'
import Home from './components/Home'
import Cart from './components/Cart'



function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<><Navbarpanel/><Home/></>
    },
    {
      path:'/product',
      element:<><Navbarpanel/><Product/></>
    },
    {
      path:'/dash',
      element:<><Navbarpanel/><Dashboard/></>
    },
    {
      path:'/cart',
      element:<><Navbarpanel/><Cart/></>
    },
  ])

  return (
    <>
    
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
