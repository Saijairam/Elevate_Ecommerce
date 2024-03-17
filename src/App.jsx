import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home.jsx';


import Navbar from './components/Navbar.jsx';

function App() {
  return (
     <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          </Routes>
     </BrowserRouter>

  );
}

export default App;
