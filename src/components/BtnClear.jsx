import React from "react";
import '../stylesheets/BtnClear.css'

const BtnClear = (props) => (
  <div className="btnClear" onClick={props.clearInput}>
    {props.children}
  </div>
);

export default BtnClear;