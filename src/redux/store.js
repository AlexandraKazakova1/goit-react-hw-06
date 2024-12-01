// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import selectContacts from "./contactsSlice";
import changeFilter from "./filtersSlice";

export const store = configureStore({
  reducer: {
    tasks: selectContacts,
    filters: changeFilter,
  },
});
