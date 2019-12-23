import React from 'react';

export default class Tech extends React.Component {
  componentDidUpdate = () => {
    console.log('tech updated');
  }

  render() {
    console.log('tech render');

    return (
      <div className="pageWrapper">
        <h1>&lt;Technology /&gt;</h1>
        <h2>Software & Languages</h2>
        <p>React, JavaScript / jQuery / ES6, PHP, MySQL, MariaDB, Python, Bash, HTML5, CSS3, SASS, Symfony 2, Symfony 4, Linux, Apache, Node.js, Yarn, npm, Webpack, Adobe Suite, AWS, Git, GitHub, GitLab.</p>
        <h2>RustyAbbott.com</h2>
        <p>The web app you're currently viewing was built with Facebook's <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</a>. It utilizes react-router-dom for routing and SASS/SCSS for styling.</p>
        <h2>Hutchinson-Island.com</h2>
        <p>Coming soon! This project is currently being rebuilt with Symfony 4.</p>
        <h2>Memory Game (<a href="https://github.com/rustyabbott/memory-game" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://rustyabbott.github.io/memory-game/" target="_blank" rel="noopener noreferrer">Play Live</a>)</h2>
        <p>Match all cards to win! Project two for the Grow with Google / Udacity front-end web development program. Coded with jQuery.</p>
        <div className="gif-wrapper">
          <img src="img/memory-game.gif" alt="memory game" />
        </div>
        <h2>Arcade Game (<a href="https://github.com/rustyabbott/arcade-game" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://rustyabbott.github.io/arcade-game/" target="_blank" rel="noopener noreferrer">Play Live</a>)</h2>
        <p>A remake of the classic arcade game, "Frogger", for the Grow with Google / Udacity front-end web developer program. Desktop only. Use the arrows on your keyboard to play.</p>
        <div className="gif-wrapper">
          <img src="img/arcade-game.gif" alt="arcade game" />
        </div>
        <h2>Analog Clock (<a href="https://github.com/rustyabbott/clock" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://rustyabbott.github.io/clock/" target="_blank" rel="noopener noreferrer">Play Live</a>)</h2>
        <p>Code test requiring the programming of an analog clock in JavaScript & utilizing HTML5 Canvas.</p>
        <div className="gif-wrapper">
          <img src="img/analog-clock.gif" alt="arcade game" />
        </div>
      </div>
    );
  }
}
