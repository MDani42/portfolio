import React from "react";
import './kezdolap.css';
import Prokep from '../assets/prokep.png'


export const Kezdolap = () => {
  return (
    <div className="kezdolap">
      <div className="holder">
        <h2 className="name-holder">Molnár Dániel</h2>
        <p className="text-holder">
          Üdvözöllek a porfóliómon! Itt megtalálsz rólam, illetve a munkáimról
          egy pár dolgot.Ha kérdésed lenne keress fel nyugodtan az
          elérhetőségeimnél.
        </p>
        </div>
        <div className="img-holder">
          <img src={Prokep} alt="" />
        </div>
    </div>
  );
};

export default Kezdolap;
