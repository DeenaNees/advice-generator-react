import { useState, useEffect } from "react";
import dice from "./icon-dice.svg";
import divider from "./pattern-divider-desktop.svg";
import "./App.css";

const getRandomAdvice = () => {
  return fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .catch((error) => {
      alert(`Error ${error}`);
    });
};

function AdviceData({ advice }) {
  return (
    <div className="wrapper">
      <div className="advice">
        <p className="advice__title">Advice #{advice.id}</p>
        <p className="advice__content">"{advice.advice}"</p>
        <img className="advice__divider" src={divider} alt="" />
        <button className="advice__button" onClick={() => getRandomAdvice()}>
          <img className="dice_img" src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

function App() {
  const [advice, setAdvice] = useState("");

  const randomAdvice = () => getRandomAdvice();
  setAdvice(randomAdvice);

  useEffect(() => {
    getRandomAdvice();
  }, []);

  return <AdviceData advice={advice} />;
}

export default App;
