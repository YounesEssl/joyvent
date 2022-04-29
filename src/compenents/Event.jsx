import React from 'react';

export default function Event({ event }) {
    const eventId = event.id;
  return (
    <div>
        <h1>test</h1>
        <div>
            <div>
                <h4>{event.fields.Name}</h4>
            </div>
            <div>
                <p>{event.fields.Hour}</p>
            </div>
            <div>
                <p>{event.fields.Attendees}</p>
            </div>
            <div>
                <p>{event.fields.Location}</p>
            </div>
        </div>
    </div>
  )
}
