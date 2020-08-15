import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Users';


ReactDOM.render(
  <BrowserRouter>
    <Switch>  
        <Route path="/" exact={true} component={Login}/>
        <Route path="/users" component={Users}/>
    </Switch>
  
  </BrowserRouter>,
  document.getElementById('root')
);

