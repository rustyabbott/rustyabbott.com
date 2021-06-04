import React from 'react';
import Home from './Home';
import Tech from './Tech';
import Sort from './Sort';

const Routes = {
  "/": () => <Home />,
  "/tech": () => <Tech />,
  "/sort": () => <Sort />
};

export default Routes;
