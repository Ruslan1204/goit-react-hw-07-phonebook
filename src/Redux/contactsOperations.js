// import * as contactsActions from './contactsActions';
// import * as contactsApi from '../services/contactsApi';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsPending());

//   const contacts = await contactsApi.getContacts();

//   dispatch(contactsActions.fetchContactsFulfilled(contacts));
// };

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsApi.getContacts();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

axios.defaults.baseURL = 'https://649824ac9543ce0f49e1aed2.mockapi.io';

// export async function getContacts() {
//   const { data } = await axios.get(`/contacts`);
//   return data;
// }

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get(`/contacts`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (name, number, thunkAPI) => {
    try {
      const {data} = await axios.post("/contacts", { name, number });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const {data} = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);