// import logo from "./logo.svg";
// import "./App.css";

import React from 'react';
import Form from './components/Form/Form';

class App extends React.Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}

export default App;
