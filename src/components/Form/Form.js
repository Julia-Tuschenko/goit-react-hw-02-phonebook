import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {};

  handelChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handelSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  nameId = nanoid();
  numberId = nanoid();

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            name="name"
            id={this.nameId}
            onChange={this.handelChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
        {/* <label>
          Number
          <input
            type="tel"
            value={this.state.number}
            name="number"
            id={this.numberId}
            onChange={this.handelChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label> */}
      </form>
    );
  }
}

export default Form;
