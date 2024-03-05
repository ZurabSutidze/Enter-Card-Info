import React, { useState } from "react";
import "./App.css";
import Card from "./Cards/Cards.jsx";
import FormFields from "./FormFields.jsx";

function formatCardNumber(inputValue) {
  const numericValue = inputValue.replace(/\D/g, "");
  const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, "$1 ");
  return formattedValue;
}

const App = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setname] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCVC] = useState("");
  const [showThankYou, setShowThankYou] = useState(true);
  const [nameError, setNameError] = useState(null);
  const [numberError, setNumberError] = useState(null);
  const [monthError, setMonthError] = useState(null);
  const [yearError, setYearError] = useState(null);
  const [cvcError, setCvcError] = useState(null);

  const validateInputs = () => {
    setNameError(!name ? "Can't be blank" : null);
    setNumberError(!cardNumber ? "Can't be blank" : null);
    setMonthError(!expiryMonth ? "Can't be blank" : null);
    setYearError(!expiryYear ? "Can't be blank" : null);
    setCvcError(!cvc ? "Can't be blank" : null);

    return !(!name || !cardNumber || !expiryMonth || !expiryYear || !cvc);
  };

  const NameChange = (event) => {
    setname(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatCardNumber(inputValue);
    setCardNumber(formattedValue);
  };

  const handleExpiryMonthChange = (event) => {
    setExpiryMonth(event.target.value.replace(/\D/g, ""));
  };

  const handleExpiryYearChange = (event) => {
    setExpiryYear(event.target.value.replace(/\D/g, ""));
  };

  const handleCVCChange = (event) => {
    setCVC(event.target.value.replace(/\D/g, ""));
  };

  const handleConfirmClick = (event) => {
    event.preventDefault();

    if (validateInputs()) {
      if (parseInt(expiryMonth, 10) > 12) {
        setMonthError("Expiry month cannot be greater than 12.");
      } else {
        setShowThankYou(false);
      }
    }
  };

  const handleConfirmClick2 = () => {
    setShowThankYou(true);
    setCardNumber("");
    setname("");
    setExpiryMonth("");
    setExpiryYear("");
    setCVC("");
    setNameError(null);
    setNumberError(null);
    setMonthError(null);
    setYearError(null);
    setCvcError(null);
  };

  return (
    <>
      {showThankYou ? (
        <>
          <form onSubmit={handleConfirmClick}>
            <Card
              Name={name}
              Number={cardNumber}
              CVC={cvc}
              MM={expiryMonth}
              YY={expiryYear}
            />
            <div className="rame">
            <FormFields
              NameChange={NameChange}
              handleCardNumberChange={handleCardNumberChange}
              handleExpiryMonthChange={handleExpiryMonthChange}
              handleExpiryYearChange={handleExpiryYearChange}
              handleCVCChange={handleCVCChange}
              cardNumber={cardNumber}
              expiryMonth={expiryMonth}
              expiryYear={expiryYear}
              cvc={cvc}
            />

            {nameError && <p className="error er1">{nameError}</p>}
            {numberError && <p className="error er2">{numberError}</p>}
            {monthError && <p className="error er3">{monthError}</p>}
            {yearError && <p className="error er4">{yearError}</p>}
            {cvcError && <p className="error er5">{cvcError}</p>}

            <button className="CONFIRM" type="submit">
              CONFIRM
            </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <Card
            Name={name}
            Number={cardNumber}
            CVC={cvc}
            MM={expiryMonth}
            YY={expiryYear}
            />
            <div className="rame2">
          <img className="Thank" src="Purplecircle.svg" alt="" />
          <p className="THANKS">THANK YOU!</p>
          <p className="added">We’ve added your card details</p>
          <button onClick={handleConfirmClick2} className="Continue2">
            Continue
              </button>
              </div>
        </>
      )}
    </>
  );
};

export default App;
