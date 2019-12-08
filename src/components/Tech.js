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
        <p>This web application was built with Facebook's <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</a>. It utilizes react-router-dom for routing and SASS for styling.</p>
        <h2>Hutchinson-Island.com</h2>
        <p>This project was originally built with PHP, jQuery, MySQL, HTML, & CSS, then later rebuilt with Symfony 4.</p>
        <h2>Fun & Games</h2>
        <h3>Memory Game</h3>
        <div class="gif-wrapper">
          <img src="img/memory-game.gif" alt="memory game" />
        </div>
        <h3>Frogger</h3>
        <h3>Analog Clock</h3>
        <h3>Neighborhood Map</h3>
        <h3>Restaurant Reviews</h3>
      </div>
    );
  }
}
