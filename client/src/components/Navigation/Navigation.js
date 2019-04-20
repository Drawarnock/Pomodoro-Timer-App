import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='Navigation'>
      <ul className='Navigation__list'>
        <li className='Navigation__item'>
          <Link className='Navigation__link' to='/'>
            HOME
          </Link>
        </li>
        <li className='Navigation__item'>
          <Link className='Navigation__link' to='/activity'>
            ACTIVITY
          </Link>
        </li>
        <li className='Navigation__item'>
          <Link className='Navigation__link' to='/stats'>
            STATS
          </Link>
        </li>
        <li className='Navigation__item'>
          <Link className='Navigation__link' to='/settings'>
            SETTINGS
          </Link>
        </li>
        <li className='Navigation__item Navigation__item--right'>
          <Link className='Navigation__link' to='/signup'>
            SIGN UP
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
