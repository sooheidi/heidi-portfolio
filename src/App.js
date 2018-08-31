import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Menu } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Item name='home'/>
        <Menu.Item name='Code'/>
        <Menu.Item name='Art'/>
        <Menu.Item name='Photography'/>
        <Menu.Item name='Recipes'/>

      </Menu>
    );
  }
}

export default App;
