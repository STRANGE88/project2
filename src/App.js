
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Sign from './components/Sign';

function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Sign/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
