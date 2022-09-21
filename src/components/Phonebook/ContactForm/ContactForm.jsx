import React, { Component } from 'react'
import { nanoid } from "nanoid";
import {
  StyledContactForm,
  StyledLabel,
  StyledInput,
  StyledButtonAddContact,
} from 'components/Phonebook/ContactForm/ContactForm.styled';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    nameId = nanoid();
    telId = nanoid()

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) => {
        const { name, number } = this.state;
        
        e.preventDefault()
        this.props.onSubmit({ name, number });
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
        // const { name, number } = this.state;
        const { nameId, telId, handleChange, handleSubmit } = this;

        return (
          <StyledContactForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor={nameId}>Name</StyledLabel>
            <StyledInput
              id={nameId}
              onChange={handleChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <StyledLabel htmlFor={telId}>Number</StyledLabel>
            <StyledInput
              id={telId}
              onChange={handleChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <StyledButtonAddContact type="submit">
              Add contact
            </StyledButtonAddContact>
          </StyledContactForm>
        );
  }
}
