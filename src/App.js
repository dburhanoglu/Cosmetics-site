import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Urun from './Urun';
import Main from './Main'
function App() {
  return (
  <div>
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/urun" element={<Urun />} />
        </Routes>
    </div>
  </Router>


 
  
  );
  </div>
    
  );
}


export default App;
