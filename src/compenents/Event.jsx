import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export default function Event({ event }) {
  return (
    <div id="maincontainer">
      <div id="eventcontainer">
        <div id="firstcontainer">
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
