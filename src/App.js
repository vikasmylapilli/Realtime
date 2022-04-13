import React from 'react';
import reactRouterDom from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';
import {useGlobalContext} from "./StateProvider";

function App() {
  const { user } = useGlobalContext()
  return (
    <div className="App">
      <Router>
        {
          !user ? (
            <Login/>
          ) : (
            <>
            <Header/>
          <div className="app__body">
            <Sidebar/>
            <Switch>
              <Route path="/room/:roomId">
                <Chat/>
              </Route>
              <Route exact path="/">
                <h1>Welcome</h1>
              </Route>
            </Switch>
          </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
