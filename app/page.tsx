import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Rick and Morty Characters</h1>
      <Link href="/characters">
        <div className="bg-blue-500 text-white px-4 py-2 rounded text-center">
          View Characters
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
