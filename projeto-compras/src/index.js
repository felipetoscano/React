import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ShoppingList from './ShoppingList';

ReactDOM.render(
    <ShoppingList />,
  document.getElementById('root')
);

serviceWorker.unregister();
