import './App.css';
import About from './components/about/About';
import Adoption from './components/adoption/Adoption';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Help from './components/help/Help';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Help />
      <About />
      <Adoption />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
