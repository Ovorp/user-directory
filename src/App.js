import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Card from './components/Card';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
}
