import React from 'react';
import './App.css';
import ContactList from './components/contactList';
import ContactAdd from './components/contactAdd';
import Profile from './components/Profile';
import ContactDelete from './components/contactDelete';

class App extends React.Component {
  render() {
    return (
      <div>
        <ContactList />
        <br />
        <ContactAdd />
        <br />
        <Profile />
        <br />
        <ContactDelete />
        <br />
      </div>
    );
  }
}

export default App;
