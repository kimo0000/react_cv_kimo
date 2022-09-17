import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Competence from './components/competences/Competence';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contacts/Contact';
import NotFound from './components/not_found/NotFound';
import { Routes, Route } from 'react-router-dom';
import './app.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competence" element={<Competence />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
