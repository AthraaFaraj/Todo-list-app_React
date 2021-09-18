import './App.css';
import {useState, useEffect, useRef} from 'react';
import React from 'react';
// import react, {component} from 'react';
// import task from './tasks';
// import task, { subTask } from './tasks';
// import {styled} from './global_style';
import { FaTrashAlt } from "react-icons/fa";




function App() {
 
  const [todos,setValue]=useState('')
  const [arr,setArr]=useState([])
  const [item,setSearch]=useState('')
  // const [filteredTodos, setFilteredTodos]=useState([]);
 


  const addArr=()=>{
    if (todos !== "") {
      setArr([
        ...arr,
        {
          value: todos,
          isCompleted: false
        }
      ]);
      setValue("");
    }
  }
const inpRef=useRef(null)

useEffect(()=>{
  inpRef.current.focus()
},[]);
  

const filtering = arr.filter((i)=> i.value.toLowerCase().includes(item.toLowerCase()));


function handleFinish (e) {
  const id = e.target.id;
  if (arr[id].isCompleted){
    arr[id] = {
      ...arr[id],
      isCompleted: false
    };
    setArr([...arr]);
  }
    else {
      arr[id]={
        ...arr[id],
        isCompleted: true
      };
      setArr([...arr]);
    }
  }

function handleDelete(e) {
  const id =Number(e.target.id);
const filterArr = arr.filter((val,index) => {
  return index !== id;
});
setArr(filterArr);
}


  return (
    
    <div className="App">

<div className="App-header">
<h2>ToDo List App</h2>
<div className="inpSch">
      <input type="search" className="addIn" ref={inpRef} autoFocus onChange={(event)=>{setSearch(event.target.value)}} placeholder="Search for task" />
      
          <input placeholder="Enter your task" className="addSearch" ref={inpRef} autoFocus type="text" onChange={(e)=> setValue(e.target.value)} value={todos} />
          </div>
          <button onClick={addArr}>Add list</button>
          {/* <button style={styled.button} onClick={handleDelete}>- arr</button> */}



          {filtering.map((val,id)=>{
    return <ul key={id}>
      <li id={id}
      onClick={handleFinish}
      style={
        val.isCompleted ? {textDecoration: "line-through"} : {textDecoration:"none"}
      }>{val.value}</li>
      <FaTrashAlt
      style={{ cursor:"pointer"}}
      id={id}
      onClick={handleDelete} 
      />
    </ul>
  })
}
  
</div>
  </div>
  
  );
}
export default App;
