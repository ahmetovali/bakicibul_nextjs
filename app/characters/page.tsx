'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setCharacters } from '../../store/characterSlice';
import { fetchCharacters } from '../../utils/api';
import CharacterCard from '../../components/CharacterCard';
import Filter from '../../components/Filter';

const CharactersPage: React.FC = () => {
  const dispatch = useDispatch();
  const { items, filters } = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    const loadCharacters = async () => {
      const characters = await fetchCharacters(filters);
      dispatch(setCharacters(characters));
    };

    loadCharacters();
  }, [dispatch, filters]);

  return (
    <div className="container mx-auto p-4">
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
