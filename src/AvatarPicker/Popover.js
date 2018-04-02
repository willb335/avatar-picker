import React, { Component } from "react";
import Proptypes from "prop-types";
import "./avatar-picker-styles/popover-styling.css";

class Popover extends Component {
  static propTypes = {
    avatarList: Proptypes.arrayOf(Proptypes.object.isRequired),
    closeAvatarPicker: Proptypes.func.isRequired,
    scaleOutClass: Proptypes.string
  };

  state = { isAvatarSelected: false, avatarSelected: -1 };

  handleAvatarListItemClick = (e, i) => {
    if (i !== 0) {
      return new Promise(resolve => {
        this.setState({ isAvatarSelected: true, avatarSelected: i });
        resolve(i);
      }).then(i => setTimeout(() => this.props.closeAvatarPicker(i), 1000));
    }
  };

  getClassname = i => {
    const { isAvatarSelected, avatarSelected } = this.state;
    if (i === 0) {
      return "First-child";
    } else if (isAvatarSelected && i === avatarSelected) {
      return "Loading";
    } else {
      return "Default";
    }
  };

  handleEnterKeyPress = onClick => ({ key }) => {
    if (key === "Enter") {
      onClick();
    }
  };

  getAvatar = ({ src, label }, i) => (
    <li
      key={label}
      className={this.getClassname(i)}
      style={{ outline: "none" }}
      onClick={e => this.handleAvatarListItemClick(e, i)}
      onKeyPress={this.handleEnterKeyPress(e =>
        this.handleAvatarListItemClick(e, i)
      )}
      tabIndex={0}
    >
      <img src={require(`../avatars/${src}`)} className="Avatars" alt={label} />
    </li>
  );

  render() {
    const { avatarList, scaleOutClass } = this.props;
    return (
      <div className={scaleOutClass ? scaleOutClass : "Popover-container"}>
        <div className="Triangle" />
        <div className="Popover">
          <div className="Choose-avatar-text">{"Choose your avatar"}</div>
          <ul className="Avatar-list-container">
            {avatarList.map(({ src, label }, i) =>
              this.getAvatar({ src, label }, i)
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Popover;
