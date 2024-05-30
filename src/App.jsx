import { useState } from 'react'
import './App.css'
import { Navigate,Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import View from './pages/View'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<View/>} path='/:id/view'/>
      <Route path={'/*'} element={<Navigate to={'/'}/>}></Route>
    </Routes>
    <Footer/>
   
    </>
  )
}

export default App
