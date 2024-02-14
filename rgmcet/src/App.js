import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <Header />
    <Home />
    <About />
    <Contact />
    <NotFound />
    <Footer />
  </BrowserRouter>
);

export default App;
