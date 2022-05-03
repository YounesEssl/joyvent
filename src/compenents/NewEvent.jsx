import React, { useRef } from "react";
import base from "../api/base";
import "./NewEvent.css";

export default function NewEvent() {
  const nameRef = useRef();
  const hourRef = useRef();
  const locationRef = useRef();
  const passwordRef = useRef();

  const newEvent = (elm) => {
    elm.preventDefault();
    const Name = nameRef.current.value;
    const Hour = hourRef.current.value;
    const Location = locationRef.current.value;
    const Password = passwordRef.current.value;
    base("tblzVrtPuEd6PpMEg").create(
      { Name, Hour, Location, Password },
      function (err, record) {
        if (err) {
          console.error(err);
          return;
        }
        prompt(record.getId());
      }
    );
  };

  return (
    <div id="formcontainer">
      <div id="sndformcontainer">
        <h3>Create Your Event</h3>
        <form>
          <div class="space">
            <label>Your Name</label>
            <input
              type="name"
              className="form-control"
              id="inputName"
              aria-describedby="nameHelp"
              ref={nameRef}
            />
          </div>
          <div class="space">
            <label>Hour</label>
            <input
              type="text"
              className="form-control"
              id="inputHour"
              ref={hourRef}
            />
          </div>
          <div class="space">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              id="inputLocation"
              ref={locationRef}
            />
          </div>
          <div class="space">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="inputLocation"
              ref={passwordRef}
            />
          </div>
          <button type="submit" onClick={newEvent}>
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}
