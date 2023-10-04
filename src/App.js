/** @format */

import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();
  const [tempData, setTempData] = useState();
  const [string, setString] = useState('');
  const getData = () => {
    fetch('celebrities.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setTempData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleFieldChange = (index, field, value) => {
    // Create a new array with the updated JSON object
    const updatedArray = tempData.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    });

    // Update the state with the new array
    setTempData(updatedArray);
  };

  const handleSave = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>Displaying data</h1>
      <form onSubmit={handleSave}>
        {tempData &&
          tempData.length > 0 &&
          tempData.map((user, key) => {
            return (
              <input
                type="text"
                
                onChange={(e) =>
                  handleFieldChange(key,"country" , e.target.value)
                }
                value={user.country}
              />
            );
          })}

        <button>Cancel</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
