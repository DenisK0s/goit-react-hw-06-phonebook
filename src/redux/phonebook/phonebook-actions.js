import { createAction } from '@reduxjs/toolkit';

// либы
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('phonebook/addContact', contactData => ({
  payload: {
    id: uuidv4(),
    ...contactData,
  },
}));

export const deleteContact = createAction('phonebook/deleteContact');
export const filterContacts = createAction('phonebook/filterContacts');
