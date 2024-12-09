import './App.css';
import './mediaqueries.css'
import Navigation from './components/navBar';
import Profile from './components/profile';
import About from './components/about';
import Service from './components/service';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Navigation/>
    <Profile/>
    <About/>
    <Service/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
