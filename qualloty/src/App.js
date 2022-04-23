import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import MainMenu from './components/MainMenu/MainMenu'
import {useState} from 'react';

function App() {
  const [darkMode, setMode] = useState(false);
  
  function toggleDarkMode(dmode){
    setMode(dmode)
  }

  return (
    <div className={`App ${darkMode? "dark-mode": ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <div className="main-box">
        <div className="slogan-container">
          <p className="element">Bringing back allo - A wise, wise man</p>
        </div>
        <img className="element" src="./images/2vin.jpg"/>
      </div>
      <MainMenu/>
    </div> 
  );
}

export default App;

