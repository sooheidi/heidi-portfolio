import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Code from './pages/Code.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu inverted>
            <Link to='/' className='item'>Home</Link>
            <Link to='/code' className='item'>Code</Link>
            <Link to='/photography' className='item'>Photography</Link>
            <Link to='/art' className='item'>Art</Link>
            <Link to='/recipes' className='item'>Recipes</Link>
          </Menu>
          <Route path='/' exact strict render={() =>
            <h1> Home!!</h1>
          }/>

          <Route path='/code' exact component={Code}/>
        </div>
      </Router>
    );
  }
}

export default App;
