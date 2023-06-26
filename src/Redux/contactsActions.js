import { createAction } from "@reduxjs/toolkit";




export const fetchContactsPending = createAction("contacts/contactsPending");

export const fetchContactsFulfilled = createAction("contacts/contactsFulfilled");

export const fetchContactsRejected = createAction("contacts/contactsRejected");
 