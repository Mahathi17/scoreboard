import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var PLAYERS = [
  {
    name: "Mahathi Akella",
    score: 17,
    id: 1,
  },
  {
    name: "Surya Teja Mantha",
    score: 27,
    id: 2,
  },
  {
    name: "Saketh",
    score: 7,
    id: 3,
  },
]

ReactDOM.render(
  <App players={PLAYERS}/>,
  document.getElementById('root')
);
