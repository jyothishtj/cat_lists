import React from 'react';
import './App.css';
import CatList from './CatList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cat List by Owner's Gender</h1>
      </header>
      <main>
        <CatList />
      </main>
    </div>
  );
};

export default App;