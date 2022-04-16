import './App.css';
import {NavBar} from './Navbar/navbar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="main-box">
        <div class="slogan-container">
          <p className="element">Bringing back allo - A wise, wise man</p>
        </div>
        <img className="element"src="./images/2vin.jpg"/>
      </div>
    </div>
    
  );
}

export default App;

