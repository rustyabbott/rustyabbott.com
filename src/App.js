import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Tech from './components/Tech';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-container">
          <div className="App-name">
            Rusty Abbott
          </div>
          <div className="Burger">
            <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V832q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path></svg>
          </div>
        </div>
      </header>
      <main>
        <Link to='tech'>Tech</Link>
        <Switch>
          <Route exact path={ '/tech' } component={ Tech } />
        </Switch>
      </main>
      <footer>
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
