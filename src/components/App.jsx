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
