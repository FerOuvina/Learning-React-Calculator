import React from "react";
import '../stylesheets/Btn.css'

function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };
  return (
    <div className={`calculator__btn ${isOperator(props.children) ? 'calculator__btn--operator' : ''}`.trimEnd()} onClick={() => props.clickHandler(props.children)}>
      {props.children}
    </div>
  )
};

export default Button;