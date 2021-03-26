import React, { useState } from "react";
import { Link, link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  // this part uses react hooks to create the interface. this is the interface for the joining
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const submit = () => {
    if (name !== "" && room !== "")
      window.location.href = `/chat?name=${name}&room=${room}`;
  };

  return (
    <div className="joinOuterContainer">
      <div className="JoinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>

        <button onClick={submit} className="button mt-20" type="submit">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Join;
