import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import EditProfile from "./editProfile"
import DisplayProfile from "./displayProfile"
ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter >
    <Switch>
      <Route path="/editProfile" component={EditProfile} />
      <Route path="/users" component={DisplayProfile} />

              
    </Switch>
  </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
