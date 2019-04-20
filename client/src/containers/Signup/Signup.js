import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import './Signup.css';
import LoginForm from './LoginForm/LoginForm';

class Signup extends Component {
  render() {
    return (
      <div className='Signup'>
        <Button
          icon='icon ion-logo-google'
          addClasses={['button__gplus'].join(' ')}
        >
          Sign In with Google
        </Button>
        <Button
          icon='icon ion-logo-facebook'
          addClasses={['button__fb'].join(' ')}
        >
          Sign In with Facebook
        </Button>
        <Button
          icon='icon ion-logo-linkedin'
          addClasses={['button__lin'].join(' ')}
        >
          Sign In with Linkedin
        </Button>

        <span className='Signup__or'> OR </span>
        <LoginForm />
      </div>
    );
  }
}

export default Signup;
