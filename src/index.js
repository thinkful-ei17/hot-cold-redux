import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import {restartGame, makeGuess, generateAuralUpdate} from './action';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

console.log('state before any dispatch', store.getState());
store.dispatch(restartGame());
console.log('state after Restart', store.getState());
store.dispatch(makeGuess(4));
console.log('state after guess', store.getState());
store.dispatch(restartGame());
console.log('state after next Restart', store.getState());
store.dispatch(generateAuralUpdate());
console.log('state after aural update',store.getState());