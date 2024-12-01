import { createSlice } from "@reduxjs/toolkit";

// Перенесли екшени пов'язані із завданнями у файл слайса
export const addContact = createSlice("items/addContact");

export const deleteContact = createSlice("items/deleteContact");

// Початковий стан слайса
const initialState = {
  contacts: {
    items: [],
  },
};
// Експортуємо редюсер слайса
export default function selectContacts(state = initialState, action) {
  switch (action.type) {
    case "contacts/addContact": {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case "contacts/deleteContact":
      return {
        ...state,
        items: state.items.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
}
