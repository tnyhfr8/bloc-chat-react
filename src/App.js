import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

var config = {
  apiKey: "AIzaSyCShHGo2Uqyj_Yi_-AJLu30BtV3NwGJqcA",
  authDomain: "bloc-chat-react-85989.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-85989.firebaseio.com",
  projectId: "bloc-chat-react-85989",
  storageBucket: "bloc-chat-react-85989.appspot.com",
  messagingSenderId: "988488989620"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    activeRoom: ''
    };

    this.roomClick = this.roomClick.bind(this);
  }

  roomClick(room) {
    this.setState({activeRoom: room})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chat</h1>
          <nav>

          </nav>
        </header>

        <main>
         <RoomList
           firebase={firebase}
           roomClick={this.roomClick}
           activeRoom={this.state.activeRoom}
         />
         <MessageList
         firebase={firebase}
          activeRoom={this.state.activeRoom}
         />
        </main>
      </div>
    );
  }
}

export default App;
