import React from "react";
import "./Cards.css";

const Card = ({ CVC, Number, Name, YY, MM }) => {
  return (
    <>
      <div className="PurpleBackground">
        <div className="Backofthecard">
          <div className="Blackline">
            <div className="GreyOutPut">
              <p className="CVC">{CVC ? CVC : "000"}</p>
            </div>
          </div>
        </div>

        <div className="Frontofthecard">
          <img src="Circles.svg" className="Circles" alt="" />
           
          
      
          <p className="Cardnumber">{Number ? Number : "0000 0000 0000 0000"}</p>
          <p className="Name">{Name ? Name : "Zuka Sutidze"}</p>
          <p className="DATE">{YY ? `${MM || "00"}/${YY}` : `${MM || "00"}/00`}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
