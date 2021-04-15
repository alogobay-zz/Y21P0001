import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'Your todo list start in here HKKL';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
