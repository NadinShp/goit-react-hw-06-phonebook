import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/addContact');
const deleteContact = createAction('phonebook/deleteContact');
const changeFilter = createAction('phonebook/filterContact');

export { addContact, deleteContact, changeFilter };
