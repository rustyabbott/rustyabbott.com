import React, { useState, useEffect } from 'react';
import './css/App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Tech from './components/Tech';
import Sort from './components/Sort';
import Example from './components/Example';

const App = () => {
  const [pageActive, setPageActive] = useState(window.location.pathname);
  const [open, setOpen] = useState(false);

  const activeSwitch = () => {
    if (pageActive === '/') {
      document.getElementById('home').classList.add('pageActive');
      document.getElementById('tech').classList.remove('pageActive');
      document.getElementById('footer').classList.add('bottom');
    } else if (pageActive === '/tech') {
      document.getElementById('home').classList.remove('pageActive');
      document.getElementById('tech').classList.add('pageActive');
      document.getElementById('footer').classList.remove('bottom');
    }
  }

  useEffect(() => {
    activeSwitch();
    console.log('activeSwitch fired');
  });

  const homeActive = () => {
    setPageActive('/');
  }

  const techActive = () => {
    setPageActive('/tech');
  }

  const mobileHomeActive = () => {
    setPageActive('/');
    toggleNav();
  }

  const mobileTechActive = () => {
    setPageActive('/tech');
    toggleNav();
  }

  const toggleNav = () => {
    const nav = document.getElementById('nav');
    setOpen(!open)
    open ? nav.classList.remove('visible') : nav.classList.add('visible');
  }

  return (
    <div className="App" id="App">
      <header className="App-header">
        <div className="App-header-container">
          <span className="App-name"><Link to="/" id="home" onClick={ homeActive }>Home</Link></span>
          <button className="Burger" onClick={ toggleNav }>
            <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V832q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path></svg>
          </button>
          <div className="Pages">
            <span><Link to="/tech" onClick={ techActive } id="tech">Technology</Link></span>
          </div>
        </div>
      </header>
      <main>
        <nav className="Nav" id="nav">
          <Link to='/' onClick={ mobileHomeActive }><button className="navButton">Home</button></Link>
          <Link to='tech' onClick={ mobileTechActive }><button className="navButton">Tech</button></Link>
        </nav>
        <Switch>
          <Route exact path={ '/tech' } component={ Tech } />
          <Route exact path={ '/' } />
          <Route exat path={ '/sort' } component={ Sort } />
        </Switch>
        <Example />
      </main>
      <footer className="bottom" id="footer">
        <div className="Social">
          <a href="https://github.com/rustyabbott">
            <img src="img/github-icon.svg" alt="GitHub" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
