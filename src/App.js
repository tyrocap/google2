import React from 'react';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/search">
            <h1>This is a search page</h1>
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
