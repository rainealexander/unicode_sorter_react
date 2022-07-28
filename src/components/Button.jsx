import React from 'react';

const Button = (props) => {
  return <button class={props.classes} onClick={props.handleClick}>{props.buttonContent}</button>
};

export default Button;
