import React from 'react';
import Home from './Home';
import Tech from './Tech';
import Sort from './Sort';
import NotFound from './NotFound';

const Routes = {
  "/": () => <Home />,
  "/tech": () => <Tech />,
  "/sort": () => <Sort />,
  "/404": () => <NotFound />
};

export default Routes;
