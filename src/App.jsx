
import "./App.css";
import {Navbar} from './components/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import  Kezdolap  from "./pages/Kezdolap";
import  Projekteim  from "./pages/Projekteim";
import  Elerhetosegek  from "./pages/Elerhetosegek";
import  Rolam  from "./pages/Rolam";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes className="oldalak" >
          <Route path="/" element={<Kezdolap />} />
          <Route path="/projekteim" element={<Projekteim />} />
          <Route path="/rolam" element={<Rolam />} />
          <Route path="/elerhetosegek" element={<Elerhetosegek />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
