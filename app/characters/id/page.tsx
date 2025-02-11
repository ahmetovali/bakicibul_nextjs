'use client';

import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const CharacterDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const character = useSelector((state: RootState) =>
    state.characters.items.find((char) => char.id === Number(id))
  );

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <img src={character.image} alt={character.name} className="w-full h-64 object-cover rounded-t-lg mb-4" />
      <h2 className="text-2xl font-bold mt-2">{character.name}</h2>
      <p className="text-gray-600">{character.status} - {character.gender}</p>
      <p className="text-gray-600">Species: {character.species}</p>
      <p className="text-gray-600">Origin: {character.origin.name}</p>
      <p className="text-gray-600">Location: {character.location.name}</p>
    </div>
  );
};

export default CharacterDetailPage;
