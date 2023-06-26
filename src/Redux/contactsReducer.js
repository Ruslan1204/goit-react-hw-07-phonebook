import { combineReducers, createReducer } from '@reduxjs/toolkit';

// import * as contactsActions from './contactsActions';
import {fetchContacts} from'./contactsOperations'

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
 