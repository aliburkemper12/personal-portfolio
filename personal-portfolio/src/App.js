import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <span className='font-link'>
      <main className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </main>
    </span>
  );
};

export default App;

