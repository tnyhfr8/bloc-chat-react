import React, { Component } from 'react';
import fire from './../fire';

class RoomList extends Component {
  constructor(props) {
     super(props);

     this.state = {
     rooms: []
     };

 this.roomsRef = fire.database().ref('rooms');

   }

   componentDidMount() {

     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) });
     });
   }

  render() {
    console.log(this.roomsRef)
   return (
     <section className='roomlist'>
     {
       this.state.rooms.map( (room, index) =>
       <div key={index}>{room.name}</div>
     )}
     </section>
    );
  }
}

export default RoomList;
