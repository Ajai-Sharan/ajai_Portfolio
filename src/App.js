import logo from './logo.svg';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
      <section>
        <section id={"home"}>
            <Home/>
        </section>

        < NavBar/>
        <section id="about">
         <About/>
        </section>

        <section id={"skill"}>
            <Skills/>
        </section>



          <section id={"education"}>
              <Education/>
          </section>
<section id={"contact"}>
    <Contacts/>
</section>
      </section>
  );

}

export default App;
