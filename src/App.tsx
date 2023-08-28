import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CoffeeList from './pages/CoffeeList'
import Coffee from './pages/Coffee'
import NotFound from './pages/not-found'
import Layout from './Components/Layout'
import './App.css'

function App() {

  return (
    <>
      <Routes >
        <Route path='/' element={ <Layout /> } >
        <Route index element={ <Home /> } />
        <Route path='/coffees' element= { <CoffeeList /> } />
        <Route path='/coffees/:coffee' element={ <Coffee /> } />
        </Route>
        <Route path='/*' element={ <NotFound />} />
      </Routes>
    </>
  )
}

export default App
