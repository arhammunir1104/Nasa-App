import { useContext, useState } from 'react'
import './App.css'
import { Context } from './context/context';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Solar } from './pages/Solar';
import { NearEarth } from './pages/NearEarth';

function App() {
  let  { username } = useContext(Context);

  return (
    <>
    <Routes>
        <Route path='/' Component={Home} />
        <Route path='/solar' Component={Solar} />
        <Route path='/near-earth' Component={NearEarth} />
      </Routes>
    </>
  )
}

export default App
