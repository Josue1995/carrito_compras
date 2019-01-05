import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import Main from './components/main/main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <div>
    <Route path="/" component={App} />
    <Route path="/main" component={Main} />
    </div>

  </Router>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
