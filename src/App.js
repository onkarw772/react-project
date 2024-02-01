// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './component/maincomp/Master';
import Home from './component/maincomp/Home';
import About from './component/pages/About';
import { Blog } from './component/pages/Blog';

// import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"




function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    
  <Route path='/' element={<Master Rcf={Home}/>}></Route>
  <Route path='/about' element={<Master Rcf={About}/>}></Route>
  <Route path='/blog' element={<Master Rcf={Blog}/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
