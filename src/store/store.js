import { configureStore } from '@reduxjs/toolkit';

import { phonebookReducer } from './slice';

const reducer = {
  phonebook: phonebookReducer,
};

export const store = configureStore({
  reducer,
});
