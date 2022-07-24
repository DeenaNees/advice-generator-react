import { useState, useEffect } from "react";
import dice from "../images/icon-dice.svg";
import divider from "../images/pattern-divider-desktop.svg";

function AdviceData() {
  const [advice, setAdvice] = useState("");
  function getAdvice() {
    const response = fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => data.slip)
      .then((data) => setAdvice(data))
      .catch((error) => alert(error));
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="wrapper">
      <div className="advice">
        <p className="advice__title">ADVICE #{advice.id}</p>
        <p className="advice__content">"{advice.advice}"</p>
        <img className="advice__divider" src={divider} alt="" />
        <button className="advice__button" onClick={() => getAdvice()}>
          <img className="dice_img" src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AdviceData;
