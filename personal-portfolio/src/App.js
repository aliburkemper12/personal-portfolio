import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
    <ParallaxProvider>
      <span className='font-link'>
        <main className="main">
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
          </Routes>
        </main>
      </span>
    </ParallaxProvider>
  );
};

export default App;

