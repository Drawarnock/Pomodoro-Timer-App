import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';

const Home = () => <div>Home</div>;
const Activity = () => <div>Activity</div>;
const Stats = () => <div>Stats</div>;
const Settings = () => <div>Settings</div>;
const Signup = () => <div>Signup</div>;
const Footer = () => <footer>Footer</footer>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/activity' component={Activity} />
          <Route path='/stats' component={Stats} />
          <Route path='/settings' component={Settings} />
          <Route path='/signup' component={Signup} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
