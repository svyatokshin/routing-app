import logo from './logo.svg'
import Home from './components/Home'
import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function App(props) {
  const [inventory, setInventory] = useState([]);
  return (
    <div  className="App">
      <nav>
        <h1>Boris' Berries!</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='berries-list'>Berries List</Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='berries-list' element={<ItemsList items={inventory} />} />
        <Route path={'berries-list/:itemID/*'} element={<Item items={inventory} />} /> */}
      </Routes>
    </div>
    
  );
}

export default App;
