import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import FormContact from "./ContactFormStyled";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onHandlerSubmit({ ...this.state, id: uuidv4() });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    //const { name } = this.state;
    return (
      <FormContact>
        <form className="contact-form" onSubmit={this.onHandleSubmit}>
          <label className="contact-form__title">
            Name
            <input
              className="contact-form__imput"
              type="text"
              value={name}
              name="name"
              onChange={this.onHandleChange}
            />
          </label>
          <label className="contact-form__title">
            Number
            <input
              className="contact-form__imput"
              type="text"
              value={number}
              name="number"
              onChange={this.onHandleChange}
            />
          </label>
          <button className="contact-form__btn" type="submit">
            Add contact
          </button>
        </form>
      </FormContact>
    );
  }
}

export default ContactForm;
