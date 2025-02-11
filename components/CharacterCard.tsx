import React, { useEffect, useState } from 'react';
import { Character } from '../types/character';
import axios from 'axios';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [firstSeenEpisodeName, setFirstSeenEpisodeName] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      if (character.episode.length > 0) {
        try {
          const episodeUrl = character.episode[0];
          const response = await axios.get(episodeUrl);
          setFirstSeenEpisodeName(response.data.name);
        } catch (error) {
          console.error("Error fetching episode details:", error);
        }
      }
    };

    fetchEpisode();
  }, [character]);

  return (
    <div className="border p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover rounded-t-lg mb-2"
      />
      <h2 className="text-xl font-bold">{character.name}</h2>
      <p className="text-gray-500">Species: {character.species}</p>
      <p className="text-gray-500">Origin: {character.origin.name}</p>
      <p className="text-gray-500">Last Known Location: {character.location.name}</p>
      <p className="text-gray-500">First Seen In: {firstSeenEpisodeName || 'Loading...'}</p>
    </div>
  );
};

export default CharacterCard;
