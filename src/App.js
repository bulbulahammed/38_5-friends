import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FriendDetail from './components/FriendDetail/FriendDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail></FriendDetail>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <Nomatch></Nomatch>
        </Route>
      </Switch >
    </Router >
  );
}

export default App;
