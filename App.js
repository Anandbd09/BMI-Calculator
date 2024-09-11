import React, { useState } from "react";
import "./index.css";

function App() {
  // Making state for our application
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Logic

  const calcbmi = (z) => {
    z.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      //
      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you are in a healthy weight");
      } else {
        setMessage("you are overweight");
      }
    }
  };

  //reload

  let reload = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight(lbs) </label>
            <input
              type="number"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(z) => setWeight(z.target.value)}
            ></input>
          </div>
          <div>
            <label>Height(in)</label>
            <input
              type="number"
              placeholder="Enter your Height"
              value={height}
              onChange={(z) => setHeight(z.target.value)}
            ></input>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
