import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../types/character';

interface CharacterState {
  items: Character[];
  filters: {
    status: string;
    gender: string;
  };
}

const initialState: CharacterState = {
  items: [],
  filters: {
    status: '',
    gender: '',
  },
};

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Character[]>) {
      state.items = action.payload;
    },
    setFilters(state, action: PayloadAction<Partial<CharacterState['filters']>>) {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setCharacters, setFilters } = characterSlice.actions;
export default characterSlice.reducer;
