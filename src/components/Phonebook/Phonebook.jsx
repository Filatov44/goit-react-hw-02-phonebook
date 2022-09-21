import React, { Component } from 'react';
import { nanoid } from 'nanoid';


import {
  StyledPhonebookContainer,
  StyledPhonebookTitle,
  StyledTitleContact,
} from 'components/Phonebook/Phonebook.styled';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = contact => {
    // const { contacts } = this.state;
    if (this.isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }
    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  deliteContact = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  isDuplicate({ name, number }) {
    const { contacts } = this.state;
    const result = contacts.find(
      item =>
        item.name.toLowerCase() === name.toLowerCase() &&
        item.number.toLowerCase() === number.toLowerCase()
    );
    return result;
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

    getfiltredContacts() {
        const { filter, contacts } = this.state;

        if (!filter) {
            return contacts;
        }

        const normalizetFilter = filter.toLowerCase();
        const filteredContact = contacts.filter(({ name }) => {
            const normalizedContact = name.toLowerCase();
            const result = normalizedContact.includes(normalizetFilter)
            return result;
        })
      return filteredContact
    };



  render() {
    const { addContacts, deliteContact } = this;
    const { filter } = this.state;
      const changeFilter = this.changeFilter;
      const contacts = this.getfiltredContacts();

    return (
      <StyledPhonebookContainer>
        <StyledPhonebookTitle> Phonebook</StyledPhonebookTitle>
        <ContactForm onSubmit={addContacts} />
        <StyledTitleContact>Contacts</StyledTitleContact>
        <Filter filter={filter} changeFilter={changeFilter} />
        <ContactList items={contacts} deliteContact={deliteContact} />
      </StyledPhonebookContainer>
    );
  }
}
