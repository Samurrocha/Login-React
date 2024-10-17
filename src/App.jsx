import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register'
import Login from './components/login'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
