import React from "react";
import "./App.css";

const Lobby = () => {
  return (
    <div className="lobby-container">
      <h1 className="logo text-7xl font-bold">Doodle Me!</h1>

      <div className="players-box">
        <h2 className="players-title">Players</h2>
        <div className="player-card">Player 1</div>
        <div className="player-card">Player 2</div>
        <div className="player-card">Player 3</div>
      </div>

      <button className="invite-button">Invite</button>
      <button className="start-button">Ready / Start</button>
    </div>
  );
};

export default Lobby;
