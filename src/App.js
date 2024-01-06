/*
*Author: Marcos Zorzi Rosa
* 2024
*/

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navbar';
import Education from './components/Education';
import Experience from './components/Experience';
//import Projects from './components/Projects';
import Projects2 from './components/Projects-2';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" id="home">
      <Navigation/>
      <header className="App-header">
        <img className='headshot' src='./img/avatar_marcos.png' alt='avatar'/>
        <h1>Hi, I'm Marcos</h1>
        <p>Full-stack mobile and web developer</p>
      </header>
     

      <Projects2/>
      
      <Experience/>
      
      {/* <Projects/> */}

      <Education/>
      
      <Contact/>

    </div>
  );
}

export default App;
