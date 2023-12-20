import * as React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Urun from "./Urun";
import Main from "./Main";
import Makyaj from "./Makyaj";
import Skin from "./Skin";
import Hair from "./Hair";
import Ad from "./Ad";
function App() {
  return (
    <div>
      <Router>
        <div>
        <Ad />
          <nav>
            <ul>
              <li>
                <Link to="/">Anasayfa</Link>
                <hr />
                <Link to="/Makyaj">Makyaj</Link>
                <hr />
                <Link to="/Skin">Cilt Bakımı</Link>
                <hr />
                <Link to="/Hair">Sac</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/urun" element={<Urun />} />
            <Route path="/Makyaj" element={<Makyaj />} />
            <Route path="/Skin" element={<Skin />} />
            <Route path="/Hair" element={<Hair />} />
          </Routes>
        </div>
      </Router>
      );
    </div>
  );
}

export default App;
