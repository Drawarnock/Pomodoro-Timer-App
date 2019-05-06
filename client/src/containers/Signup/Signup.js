import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import './Signup.css';
import LoginForm from './LoginForm/LoginForm';

class Signup extends Component {
  render() {
    return (
      <div className='Signup'>
        <Button tag='anchor' href="/auth/google"
          icon='icon ion-logo-google'
          addClasses={['button__gplus'].join(' ')}
        >
          Sign In with Google
        </Button>
        <Button tag='anchor' href="/auth/facebook"
          icon='icon ion-logo-facebook'
          addClasses={['button__fb'].join(' ')}
        >
          Sign In with Facebook
        </Button>
        <Button tag='anchor'
          icon='icon ion-logo-twitter'
          addClasses={['button__twitter'].join(' ')}
        >
          Sign In with Twitter
        </Button>

        <span className='Signup__or'> OR </span>
        <LoginForm />
      </div>
    );
  }
}

export default Signup;
