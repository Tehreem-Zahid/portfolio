import './App.css';
import Navbarcomp from './components/Navbar';
import PicCont from './components/PicCont';
import Text from './components/Text';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbarcomp />

      <div className="bod">
        <div className="left">
          <Text />
        </div>
        <div className="right">
          <PicCont />
        </div>
      </div>
      <About />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
