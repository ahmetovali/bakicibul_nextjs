import React from 'react';
import { Character } from '../types/character';
import Link from 'next/link';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <Link href={`/characters/${character.id}`}>
        <img src={character.image} alt={character.name} className="w-full h-48 object-cover rounded-t-lg mb-2" />
        <h2 className="text-xl font-bold">{character.name}</h2>
        <p className="text-gray-600">{character.status} - {character.gender}</p>
      </Link>
    </div>
  );
};

export default CharacterCard;
