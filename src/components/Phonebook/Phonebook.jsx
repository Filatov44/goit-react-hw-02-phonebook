import React, { Component } from 'react';
import { nanoid } from 'nanoid';


import {
  StyledPhonebookContainer,
  StyledPhonebookTitle,
} from 'components/Phonebook/Phonebook.styled';

import ContactForm from './ContactForm/ContactForm';

export default class Phonebook extends Component {
    state = {
        contacts: [],
        filter: ''
    }

    addContacts = (contact) => {
        // const { contacts } = this.state;
        if (this.isDuplicate(contact)) {
            return alert(`${contact.name} is already in contacts`);
        }
        this.setState((prev) => {
            const newContact = {
              id: nanoid(),
              ...contact
            }
            return {
              contacts: [...prev.contacts, newContact]
            };
        })


    }

    isDuplicate({ name, number }) {
        const { contacts } = this.state;
        const result = contacts.find(
          item =>
            item.name.toLowerCase() === name.toLowerCase() &&
            item.number.toLowerCase() === number.toLowerCase()
        );
        return result;
    }
  
    render() {
        const { addContacts } = this;
    return (
      <StyledPhonebookContainer>
        <StyledPhonebookTitle> Phonebook</StyledPhonebookTitle>
            <ContactForm onSubmit={addContacts} />
        
      </StyledPhonebookContainer>
    );
  }
}
