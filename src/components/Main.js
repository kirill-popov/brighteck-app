import {Switch, Route, Redirect } from 'react-router-dom';

import Users from './Users';
import Drivers from './Drivers';

function Main(props) {
  return (
    <Switch>
      <Route exact path="/">
        {props.loggedIn ? <Redirect to="/users" /> : ''}
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/drivers">
        <Drivers />
      </Route>
    </Switch>
  );
}

export default Main;
