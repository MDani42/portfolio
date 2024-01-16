import React from "react";
import "./elerhetosegek.css";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Elerhetosegek = () => {
  return (
    <div className="elerhetosegek">
      <div className="ikon-szoveg">
        <a href="https://github.com/MDani42" target="_blank"
        className="link">
          <FaGithub />
        </a>
        <p>MDani42</p>
      </div>
      <div className="ikon-szoveg">
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLBtxRFCmbLsPhBbxZxWsrpRpKWVHNqVqsqGnSjtHMWPPtWgPqJWDKrjVWnrPMWTdSQgrW" target="_blank"
          className="link">
            <IoIosMail />
          </a>
          <p>molnardani.per@gmail.com</p>
      </div>
      <div className="ikon-szoveg">
        <a href="https://www.instagram.com/molnar_dany/" target="_blank"
        className="link">
          <FaInstagramSquare />
        </a>
        <p>molnar_dany</p>
      </div>
      <div className="ikon-szoveg">
        <a href="#"
        className="link">
          <BsFillTelephoneFill />
        </a>
        <p>0670*******</p>
      </div>
    </div>
  );
};

export default Elerhetosegek;
