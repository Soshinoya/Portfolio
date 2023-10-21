import './styles/main.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';

import ProjectPage from './pages/ProjectPage';
import { ScrollToTop } from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectPage />} />
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
