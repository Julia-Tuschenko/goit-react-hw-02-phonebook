// import logo from "./logo.svg";
// import "./App.css";

import React from 'react';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handelImputChange = event => {
    // console.log(event.currentTarget.name);
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <input
        type="text"
        name={this.state.name}
        onChange={this.handelImputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    );
  }
}

export default App;
