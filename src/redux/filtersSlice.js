// src/redux/filtersSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Перенесли екшени пов'язані із завданнями у файл слайса
export const setStatusFilter = createSlice("name/setStatusFilter");

// Початковий стан слайса
const initialState = {
  filters: {
    name: "",
  },
};

// Експортуємо редюсер слайса
export default function changeFilter(state = initialState, action) {
  switch (action.type) {
    case "name/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
}
