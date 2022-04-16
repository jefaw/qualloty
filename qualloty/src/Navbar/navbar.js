import React from 'react';
import './navbar.css';

const black = '#000000';
const purple = '#4C367A';

export class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {darkmode: false, color: '#4C367A'};
    this.toggleDark = this.toggleDark.bind(this);
  }
  toggleDark(){
    if (!this.state.darkmode){
      this.setState({darkmode: true, color:black});
    }
    else{
      this.setState({darkmode: false, color: purple});
    }
  }

  render() {
    const pages = ['Sign Up', 'Login'];
    const navLinks = pages.map(page => {
      return (
        <a class="page" href={'/' + page}>
          {page}
        </a>
      )
    });

    return (
      <div className="header" style={{background: this.state.color}}>
        <h1>Qualloty</h1>
        
        <nav class="navLinks">
          <button onClick={this.toggleDark}>☾</button>
          {navLinks}
        </nav>
      </div>
    );
  }
}

