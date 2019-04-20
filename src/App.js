import React, { Component } from 'react';
import './App.css';
import {ChatList} from './component/ChatList';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
        <ChatList></ChatList>
      </div>
    );
  }
}

export default App;
