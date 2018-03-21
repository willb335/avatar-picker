import React from "react";
import Proptypes from "prop-types";
import "./avatar-picker-styles/main-avatar.css";

MainAvatar.propTypes = {
  handleClick: Proptypes.func.isRequired,
  currentAvatar: Proptypes.object.isRequired
};

function MainAvatar({ handleClick, currentAvatar }) {
  return (
    <button className="Avatar" onClick={handleClick}>
      <img
        src={require(`../avatars/${currentAvatar.src}`)}
        className="Avatar-img"
        alt={`MainAvatar: ${currentAvatar.label}`}
      />
    </button>
  );
}

export default MainAvatar;
