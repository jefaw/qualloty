import React from 'react';
import './NavBar.css';

const BLACK = '#000000';
const PURPLE = '#4C367A';

export default function NavBar(props){
  const pages = ['Sign Up', 'Login'];
  const navLinks = pages.map(page => {
    return (
      <a className="page" href={'/' + page}>
        {page}
      </a>
    )
  });

  return (
    <div className="header" style={{background: props.darkMode? BLACK: PURPLE}}>
      <h1>Qualloty</h1>
      <nav className="navLinks">
        <button onClick={() => props.toggleDarkMode(!props.darkMode)}>☾</button>
        {navLinks}
      </nav>
    </div>
  );
}

