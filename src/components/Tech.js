import React from 'react';

const Tech = () => {

  return (
    <div className="pageWrapper">
      <h1>&lt;Technology /&gt;</h1>
      <h2>Software & Languages</h2>
      <p>JavaScript, React, jQuery, ES6, PHP, MySQL, MariaDB, Python, Bash, HTML5, CSS3, SASS, Symfony, Linux, Apache, Nginx, Node.js, Yarn, npm, Webpack, Adobe Suite, AWS, Git, GitHub, GitLab, Docker, OpenStack, Kubernetes, Ubuntu, CentOS, cPanel, WordPress.</p>
      <h2>InMotion Hosting (<a href="https://www.inmotionhosting.com" target="_blank" rel="noopener noreferrer">Marketing Site</a>)</h2>
      <div className="gif-wrapper">
        <a href="https://www.inmotionhosting.com" target="_blank" rel="noopener noreferrer">
          <img src="img/imh-ww2-home.png" alt="inmotionhosting.com screenshot" />
        </a>
      </div>
      <p>I'm currently a full-time developer for InMotion Hosting, Inc. Our primary focus lately has been rebuilding the primary marketing site, which can be viewed at <a href="https://www.inmotionhosting.com" target="_blank" rel="noopener noreferrer">www.inmotionhosting.com</a>. The site utilizes Symfony, Nginx, PHP, jQuery, SASS, CentOS, GitLab, and WordPress.
      </p>
      <h2>RustyAbbott.com (<a href="https://github.com/rustyabbott/rustyabbott.com" target="_blank" rel="noopener noreferrer">GitHub</a>)</h2>
      <p>The web app you're currently viewing was built with Facebook's <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">Create React App</a>. It utilizes hookrouter for routing and SASS/SCSS for styling.</p>
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
      <p>Simple analog clock in JavaScript utilizing HTML5 Canvas.</p>
      <div className="gif-wrapper">
        <img src="img/analog-clock.gif" alt="arcade game" />
      </div>
    </div>
  );
}

export default Tech;
