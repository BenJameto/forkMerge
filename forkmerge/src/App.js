import React from 'react';
import Questions from './Questions';
import CustomCalendar from './Calendar'; // Importación corregida
import Auth from './Auth';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Auth />
      </header>
      <main className="app-main">
        <Questions />
        <CustomCalendar />
      </main>
    </div>
  );
};

export default App;
