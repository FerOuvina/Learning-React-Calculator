import React from "react";
import '../stylesheets/DeleteBtn.css'

const DeleteBtn = (props) => (
  <div className="deleteBtn" onClick={props.deleteInput}>
    {props.children}
  </div>
);

export default DeleteBtn;