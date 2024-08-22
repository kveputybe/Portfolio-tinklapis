import './App.css';
import Home from './home'
import Navbar from './Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projektai } from './projektai';
import { Kontaktai } from './kontaktai';


function App() {
  return (
    <Router>
      <div className='App'>
          <Routes>
            <Route path="/">
              <Route path="/" element={<Home />} />
              <Route path="/projektai" element={<Projektai />} />
              <Route path="/kontaktai" element={<Kontaktai />} />
            </Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
