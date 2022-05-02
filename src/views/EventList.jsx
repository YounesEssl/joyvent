import React from "react";
import Event from "../compenents/Event";
import { useEffect, useState } from "react";
import base from '../api/base'
import "./EventList.css"


export default function EventList() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    base("tblzVrtPuEd6PpMEg")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setEvent(records);
        fetchNextPage();
      });
  }, []);

  return (
    <div>
      {event.length > 0 ? (
        <>
          {event.map((elm) => (
            <Event key={elm.id} event={elm} />
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
