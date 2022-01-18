// import logo from "./logo.svg";
// import "./App.css";

import React from 'react';
import Form from './components/Form/Form';

class App extends React.Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
