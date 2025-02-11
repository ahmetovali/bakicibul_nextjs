import React from 'react';
import { Providers } from './providers';
import Header from '../components/Header';
import '../styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
