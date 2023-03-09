import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Events from './components/Events';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Team from './components/Team';

function App() {
  return (
    <div>
      <Nav />
      <Landing />
      <AboutUs />
      <br></br>
      <hr></hr>
      <Events />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App;
