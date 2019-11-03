import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-name">
          Rusty Abbott
        </div>
        <div className="Burger">
          <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V832q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H192q-26 0-45-19t-19-45V320q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path></svg>
        </div>
      </header>
      <main>
        <section className="Tech">
          <h2>Tech</h2>
          <p>Personal and professional software development.</p>
        </section>
        <section className="Music">
          <h2>Music</h2>
          <p>Accoustic guitar and digital mashups.</p>
        </section>
        <section className="Adventure">
          <h2>Adventure</h2>
          <p>Surf, skydive, B.A.S.E. jumping, and travel.</p>
        </section>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
