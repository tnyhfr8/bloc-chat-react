import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import RoomList from './components/RoomList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chat</h1>
          <nav>

          </nav>
        </header>
        <main>
          <Route path="/roomlist" component={RoomList} />
        </main>
      </div>
    );
  }
}

export default App;
