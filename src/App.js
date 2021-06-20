import React, { useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import Latex from "react-latex";
import "./App.css";

const funcArr = [
  { value: "mse", label: "MSE" },
  { value: "cross-entropy", label: "Cross-Entropy" },
];

function InputsGD() {
  const [step, setStep] = useState("30");
  const [func, setFunc] = useState("MSE");

  const handleChange = (e) => {
    setStep(e.target.value);
  };

  const handleFuncChange = (e) => {
    setFunc(e.target.value);
  };

  const handleSubmit = () => {
    let data = {
      step: step,
      func: func,
    };
    alert(JSON.stringify(data));
  };
  return (
    <div style={{ marginLeft: 20 }}>
      <div>
        <input
          type="range"
          min="1"
          max="100"
          onChange={handleChange}
          class="slider"
          id="myRange"
        />
      </div>
      <div>
        <select onChange={handleFuncChange}>
          {funcArr.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
      <div>
        <p>Step: {step}</p>
      </div>
      <div>
        <p>Loss Function: {func}</p>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

const LatexInput = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div style={{ marginLeft: 40 }}>
      {/* <Latex>What is $(3\times 4) \div (5-3)$</Latex> */}
      <div style={{ marginBottom: 30 }}>
        <Latex>{"$" + input + "$"}</Latex>
      </div>
      <div>
        <input type="text" onChange={handleChange} />
      </div>
    </div>
  );
};


function App() {
  return (

    <div className="App">
      <hr style={{ margin: 20 }} />
      <LatexInput />
      <hr style={{ margin: 20 }} />
      <InputsGD />
    <Canvas>
      <ambientLight intensity={0.5} />

    </Canvas>
    </div>
  );
}

export default App;
