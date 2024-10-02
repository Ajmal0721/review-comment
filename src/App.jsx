import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Table from './pages/Table';
import Card from './pages/Card';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
