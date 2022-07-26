import React from "react";
import dice from "../images/icon-dice.svg";
import divider from "../images/pattern-divider-desktop.svg";

class AdviceData extends React.Component {
  constructor() {
    super();
    this.state = { advice: "" };
  }

  getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => data.slip)
      .then((data) => this.setState({ advice: data }))
      .catch((error) => alert(error));
  };

  componentDidMount() {
    this.getAdvice();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="advice">
          <p className="advice__title">ADVICE #{this.state.advice.id}</p>
          <p className="advice__content">"{this.state.advice.advice}"</p>
          <img className="advice__divider" src={divider} alt="" />
          <button className="advice__button" onClick={() => this.getAdvice()}>
            <img className="dice_img" src={dice} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default AdviceData;
