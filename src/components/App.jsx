import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, updateHT] = useState("");

  // name = ""
  // event.target.value = "pallab"
  // setName = "pallab" tarmane now name = "pallab"

  // input e text likhchi jokhun tokhun this fn is running
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  // button e click korle this fn is running
  // now headingtext = ""
  // now updateHT = name i.e. updateHt = pallab
  // so headingtext = pallab
  function hanleClick() {
    updateHT(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={hanleClick}>Submit</button>
    </div>
  );
}

export default App;


// controlled components in form
/* 
html er khetre element gulo nijer state nijei update kore rakhe
user input change hole
llike eg whats ur name r bhetore naam ta change hole 
html elements gulo nije thekei update kore neye nijer state gulo


but in case of react 
amra jehetu useState use korchi 
so element gulo jate nije theke update kore nijer state gulo
we need to use a variable known as value in the element portion and
oi value r content e amra State ta store kore debo


*/

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, updateHT] = useState("");

  // name = ""
  // event.target.value = "pallab"
  // setName = "pallab" tarmane now name = "pallab"

  // input e text likhchi jokhun tokhun this fn is running
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  // button e click korle this fn is running
  // now headingtext = ""
  // now updateHT = name i.e. updateHt = pallab
  // so headingtext = pallab
  function hanleClick(event) {
    updateHT(name);
    event.preventDefault();
    //  event.preventDefault(); page ta regresh howar theke stop korche
    // event ta hooche ekhane clicking the button
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={hanleClick}>
        {/* onSubmit mane hocche submit type r element ta click howa  */}
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
