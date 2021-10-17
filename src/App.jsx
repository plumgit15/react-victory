import React from "react";
import Sample1 from "./components/sample1";
import Sample2 from "./components/sample2";
import Sample3 from "./components/sample3";
import Sample4 from "./components/sample4";
import "./App.css";

function App() {
  const style = {
    width: "50%",
    margin: "0 auto"
  };
  return (
    <div className="App">
      <div style={style}>
        <Sample1 />
        <Sample2 />
        <Sample3 />
        <Sample4 />
      </div>
    </div>
  );
}

export default App;
