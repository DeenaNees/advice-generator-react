import { useState, useEffect } from "react";
import dice from "./icon-dice.svg";
import divider from "./pattern-divider-desktop.svg";
import "./App.css";

function AdviceData({ advice, getAdviceFunction }) {
  return (
    <div className="wrapper">
      <div className="advice">
        <p className="advice__title">ADVICE #{advice.id}</p>
        <p className="advice__content">"{advice.advice}"</p>
        <img className="advice__divider" src={divider} alt="" />
        <button className="advice__button" onClick={() => getAdviceFunction()}>
          <img className="dice_img" src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

function App() {
  const [advice, setAdvice] = useState("");
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => data.slip)
      .then((data) => setAdvice(data))
      .catch((error) => alert(error));
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return <AdviceData advice={advice} getAdviceFunction={getAdvice} />;
}

export default App;
