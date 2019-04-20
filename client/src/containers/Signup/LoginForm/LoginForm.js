import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className='LoginForm'>
      <form>
        <div className='LoginForm__group'>
          <label className='LoginForm__label'>E-mail:</label>
          <input type='text' className='LoginForm__input' />
        </div>
        <div className='LoginForm__group'>
          <label className='LoginForm__label'>Password:</label>
          <input type='text' className='LoginForm__input' />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
