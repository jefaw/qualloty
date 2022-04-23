import React from 'react';
import './NavBar.css';

const BLACK = '#000000';
const PURPLE = '#4C367A';

export class NavBar extends React.Component {
  render() {
    const pages = ['Sign Up', 'Login'];
    const navLinks = pages.map(page => {
      return (
        <a className="page" href={'/' + page}>
          {page}
        </a>
      )
    });

    return (
      <div className="header" style={{background: this.props.darkMode? BLACK: PURPLE}}>
        <h1>Qualloty</h1>
        <nav className="navLinks">
          <button onClick={() => this.props.toggleDarkMode(!this.props.darkMode)}>☾</button>
          {navLinks}
        </nav>
      </div>
    );
  }
}
