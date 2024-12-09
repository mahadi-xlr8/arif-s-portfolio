import './App.css';
import './mediaqueries.css'
import Navigation from './components/navBar';
import Profile from './components/profile';
import About from './components/about';
import Service from './components/service';
import Project from './components/project';
import ImageCarouselPopup from './components/imageSlider';

function App() {
  return (
    <>
    <Navigation/>
    <Profile/>
    <About/>
    <Service/>
    <Project/>
    </>
  );
}

export default App;
