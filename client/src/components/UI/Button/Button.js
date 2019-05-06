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
  let button = null;
  if(props.tag === 'anchor') {
    button = (<a href={props.href}className={'button ' + props.addClasses}>
    {icon}
    {props.children}
  </a> );
  } else {
    button = (
    <button className={'button ' + props.addClasses}>
    {icon}
    {props.children}
  </button>);
  }


  
  return (
    <div>
      { button }
    </div>
  );
};

export default Button;
