import React, { Component } from 'react';
//import fire from './../fire';

class MessageList extends Component {
  constructor(props) {
  super(props);

  this.state = {
  messages: []
  };

  this.messageRef = this.props.firebase.database().ref('messages');
  //this.activeMessages = this.roomsRef.equalTo(this.props.activeRoom.key);
  }

  componentWillReceiveProps(nextProps) {

    var activeMessages = this.messageRef.equalTo(nextProps.activeRoom.key);
    console.log(activeMessages);
  };

  componentDidMount() {
    this.messageRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) });
    });
  }

  render() {
    console.log(this.props.activeRoom.key)
    return (
      <section>
      <h1>{this.props.activeRoom.name}</h1>
      <section className='messagelist'>
      {
        this.state.messages.map( (message, index) => {
          if ( message.roomId === this.props.activeRoom.key) {
            return <div key={index}> {message.content} </div>
          } else {
            return
          }
        }

      )}
      </section>
      </section>
    );
  }
}

export default MessageList;
