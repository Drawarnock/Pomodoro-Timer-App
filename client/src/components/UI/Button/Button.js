import React from 'react';
import './Button.css';

const Button = props => {
  let icon = null;
  if (props.icon) {
    icon = (
      <span className='icon-container'>
        <i className={props.icon} />
      </span>
    );
  }
  return (
    <button className={'button ' + props.addClasses}>
      {icon}
      {props.children}
    </button>
  );
};

export default Button;
