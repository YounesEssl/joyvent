import React from 'react'
import { useEffect, useRef } from 'react';
import "./HomeScreen.css"

import imgmap from "../assets/images/map.png"

import NewEvent from '../compenents/NewEvent'

import base from '../api/base'



<script src="https://kit.fontawesome.com/9e4f2f5cf7.js" crossorigin="anonymous"></script>

export default function HomeScreen() {


  useEffect(() => {
    base("tblzVrtPuEd6PpMEg")
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        fetchNextPage();
      });
  }, []);

    const myRef = useRef(null)
 
    const executeScroll = () => myRef.current.scrollIntoView()

  return (
    
    <>
      <div id="but">
          <img src={imgmap} alt="logo" width="600px"/>
          <button id="newevent" onClick={executeScroll}>Create Your Event</button>
      </div>
      <div id="formContainer" ref={myRef}>
        <NewEvent />
      </div>
    </>
  )
}
