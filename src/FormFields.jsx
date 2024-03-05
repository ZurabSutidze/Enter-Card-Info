import React from "react";
import "./App.css"


const FormFields = ({
  NameChange,
  handleCardNumberChange,
  handleExpiryMonthChange,
  handleExpiryYearChange,
  handleCVCChange,
  cardNumber,
  expiryMonth,
  expiryYear,
  cvc,
}) => {
  return (
    <>
      <div className="CardHolder">
        <p className="CardHoldername">CARDHOLDER NAME</p>
        <input
          className="HolderInput"
          placeholder="e.g. Zuka Sutidze"
          type="text"
          onChange={NameChange}
          maxLength={16}
        />
      </div>

      <div className="Cardnum">
        <p className="Cardnumeber">Card Number</p>
        <input
          maxLength={19}
          className="HolderInput"
          placeholder="e.g. 1234 5678 9123 0000"
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </div>

      <div className="Expdate">
        <div>
          <p className="date">EXP. DATE (MM/YY)</p>

          <div className="Inputs">
            <input
              className="MM YY "
              type="text"
              maxLength={2}
              placeholder="MM "
              value={expiryMonth}
              onChange={handleExpiryMonthChange}
            />

            <input
              placeholder="YY"
              className="YY MM"
              type="text"
              maxLength={2}
              value={expiryYear}
              onChange={handleExpiryYearChange}
            />
          </div>
        </div>
        <div className="CVCs">
          <p className="CVCP">CVC</p>

          <input
            placeholder="e.g. 123"
            className="CVCinput"
            type="text"
            maxLength={3}
            value={cvc}
            onChange={handleCVCChange}
          />
        </div>
      </div>
    </>
  );
};

export default FormFields;
