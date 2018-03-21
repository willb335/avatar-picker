import React, { Component } from "react";
import "./App.css";
import AvatarPicker from "./AvatarPicker";
import avatarList from "./avatarList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AvatarPicker avatarList={avatarList} />
      </div>
    );
  }
}

export default App;
