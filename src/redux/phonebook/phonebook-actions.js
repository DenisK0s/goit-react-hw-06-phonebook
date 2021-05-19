import types from './phonebook-types';

// либы
import { v4 as uuidv4 } from 'uuid';

export const addContact = contactData => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    ...contactData,
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const filterContacts = filterQuery => ({
  type: types.FILTER,
  payload: filterQuery,
});
