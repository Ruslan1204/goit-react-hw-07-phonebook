import { initState } from './contacts.init-state';

import { contactsReducer } from './contacts.slice';

import { configureStore } from '@reduxjs/toolkit';

// import contactsReducer from './contactsReducer';
import { filterReducer } from './filter.slice';

// const myThunk = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispathc);
//     return;
//   }
//   next(action);
// };
// const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const contacts = await contactsApi.getContacts();
//   // return contacts;
//   console.log(contacts);
// });

// export const store = configureStore({
//   preloadedState: initState,
//   devTools: true,
//   reducer: contactsReducer,
// });

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
