import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <span className='font-link'>
      <main className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </main>
    </span>
  );
};

export default App;

