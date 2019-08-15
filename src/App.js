import React from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import './App.css';
import Chart from './chart';
function App() {
  return (
    <div className="App">
      <Chart/>
      <Alert stack={{limit: 2}} />
    </div>
  );
}

export default App;
