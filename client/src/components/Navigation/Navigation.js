import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/activity'>Activity</Link>
        </li>
        <li>
          <Link to='/stats'>STATS</Link>
        </li>
        <li>
          <Link to='/settings'>SETTINGS</Link>
        </li>
        <li>
          <Link to='/signup'>SIGN UP</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
