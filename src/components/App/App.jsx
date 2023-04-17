// import React from 'react';
// import { nanoid } from '@reduxjs/toolkit';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact, deleteContact } from '../../redux/contacts';
// import { setFilter } from '../../redux/filter';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { Filter } from '../Filter/Filter';
// import { ContactList } from '../ContactList/ContactList';
// import { AppWrapper, Title } from './App.styled';
// import { useMemo } from 'react';

// export const App = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(state => state.contacts);
//   const filter = useSelector(state => state.filter);

//   const handleAddContact = (name, number) => {
//     const existingContact = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (existingContact) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }
//     const id = nanoid();
//     dispatch(addContact({ id, name, number }));
//   };

//   const handleDeleteContact = id => {
//     dispatch(deleteContact(id));
//   };

//   const handleFilterChange = e => {
//     const { value } = e.target;
//     dispatch(setFilter(value));
//   };

//   const filteredContacts = useMemo(() => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }, [contacts, filter]);

//   return (
//     <AppWrapper>
//       <Title>Phonebook</Title>
//       <ContactForm onSubmit={handleAddContact} />
//       <Title>Contacts</Title>
//       <Filter filter={filter} onChange={handleFilterChange} />
//       <ContactList
//         contacts={filteredContacts}
//         onDeleteContact={handleDeleteContact}
//       />
//     </AppWrapper>
//   );
// };

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts';
import { setFilter } from '../../redux/filter';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { AppWrapper, Title } from './App.styled';
import { useMemo } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <AppWrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </AppWrapper>
  );
};
