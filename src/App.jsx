
import Navbar from './component/Navbar';
import Header from './component/Header';
import {Routes,Route} from 'react-router-dom'
import Cart from './component/Cart';
import './custom.css'
function App() {


  return (
    
    <div className="App">
      
      <Navbar/>
      
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Header/>} />
      </Routes>
  
      </div>
    
  )
}

export default App
