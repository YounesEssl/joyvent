import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import DeleteBtn from "./DeleteBtn";

export default function Event({ event }) {
  const eventId = event.id;
  const passwordfield = event.fields.Password
  return (
    <div id="maincontainer">
      <div id="eventcontainer">
        <div id="firstcontainer">
          <DeleteBtn eventID={eventId} passwordField={passwordfield}/>
          <div className="eventitems">
            <p>{event.fields.Name}'s Event</p>  
          </div>
          <div className="eventitems">
            <p>{event.fields.Hour}</p>
  
          </div>
        </div>
        <div className="eventitems">
          <p>{event.fields.Attendees}</p>
        </div>
        <div className="eventitems">
          <p>{event.fields.Location}</p>
        </div>
        <div>
          <FontAwesomeIcon className="iconplus" icon={ faPlus } />
        </div>
      </div>
    </div>
  );
}
