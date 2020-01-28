import React from 'react';

export default class Sort extends React.Component {
  componentDidUpdate = () => {
    console.log('sort updated');
  }

  render() {
    console.log('sort render');

    return (
      <p>testing sort component</p>
    );
  }
}
