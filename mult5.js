import './App.css';
import {useState,useContext,useEffect} from 'react';
import React from 'react';
// import react, {component} from 'react';
// import task from './tasks';
import task, { subTask } from './tasks';
import {styled} from './global_style';



function Multi() {
 
 const [val,setVal]=useState(1)
 

     
  const add=()=>setVal(val*5);
  return (
   
    <div>
       <header className="App-header">
        <button  style={styled.button} onClick={add}>Click</button>
        <h2 style={{padding:'40px', margin:'30px'}}>multiplication table of five: {val}</h2>
        </header>
  </div>
  );
}
export default Multi;