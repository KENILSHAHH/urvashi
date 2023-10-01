import React, { useEffect, useState } from 'react'

function App() {
  const[data,setData]=useState();
  const[tempData,setTempData]=useState();

  const getData =()=>{
    fetch('celebrities.json')
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setData(data);
      setTempData(data);
    })
  }
  useEffect(()=>{
    getData()
  },[]);


const handleSave=(e)=>{
  e.preventDefault();
}

  return (
    <div className="App">
      <h1>Displaying data</h1>
      <form onSubmit={handleSave}>
       
      { tempData && tempData.length >0 && tempData.map((user,key)=>{
        return (
       <input type='text' name='country' value={ user.country}/>
        )
      })}
      { data && data.length >0 && data.map((user,key)=>{
        return (
       <input type='text' name='first' value={ user.first}/>
        )
      })}
      <button>Cancel</button>
      <button type='submit'>Save</button>
      </form>
    </div>
  );
}

export default App;
