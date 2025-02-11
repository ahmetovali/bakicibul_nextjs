import axios from 'axios';
import { Character } from '../types/character';

export const fetchCharacters = async (filters: { status: string; gender: string }): Promise<Character[]> => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character', {
    params: filters,
  });
  return data.results;
};
