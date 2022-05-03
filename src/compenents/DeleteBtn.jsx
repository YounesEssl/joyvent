import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import base from "../api/base";


export default function DeleteBtn({ eventID, passwordField }) {
  const deleteEvent = () => {
    const password = prompt("Enter Password", "");
    if (password == passwordField) {
      base("tblzVrtPuEd6PpMEg").destroy(eventID, function (err, deleteEvent) {
        if (err) {
          console.error(err);
          return;
        }
        alert("Événemment supprimé");
      });

    }
    else
      alert("wrong password")
  };
  return (
    <div>
      <button onClick={deleteEvent} type="button" className="btn">
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
}
