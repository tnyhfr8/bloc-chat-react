import React, { Component } from 'react';
//import fire from './../fire';

class RoomList extends Component {
  constructor(props) {
     super(props);

     this.state = {
     rooms: [],
     newRoomName: ''
     };

 this.roomsRef = this.props.firebase.database().ref('rooms');
 this.handleChange = this.handleChange.bind(this);
 this.createRoom = this.createRoom.bind(this);
   }

   componentDidMount() {

     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) });
     });
   }

  handleChange(event) {
    this.setState({newRoomName: event.target.value});
  }

  createRoom(event) {
    this.props.roomsRef.push({
      name: this.state.newRoomName
    });
    event.preventDefault();
    //console.log(newRoomName)
  }

  render() {
   return (
     <section>
     <form onSubmit={this.createRoom}>
        <label>
          Room Name:
          <input type="text" value={this.state.newRoomName} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
     <section className='roomlist'>
     {
       this.state.rooms.map( (room, index) =>
       <div key={index} onClick={() => this.props.roomClick(room)}> {room.name} </div>
     )}
     </section>
     </section>
    );
  }
}

export default RoomList;
