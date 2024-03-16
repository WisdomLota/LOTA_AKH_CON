import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './styles/general.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScheduleTour from "./pages/ScheduleTour";

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/schedule-tour' element={<ScheduleTour />}/>
      </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
