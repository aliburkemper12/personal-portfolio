import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <main className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </main>
  );
}

