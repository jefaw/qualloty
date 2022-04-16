import React from 'react';
import './navbar.css';

export class NavBar extends React.Component {
  render() {
    const pages = ['☾','Sign Up', 'Login'];
    const navLinks = pages.map(page => {
      return (
        <a class="page" href={'/' + page}>
          {page}
        </a>
      )
    });

    return (
      <div className="header">
        <h1>Qualloty</h1>
        <nav class="navLinks">{navLinks}</nav>
      </div>
    );
  }
}

