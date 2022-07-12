import React, { useState } from 'react';
import ContextProvider from './context/ContextProvider';
import Table from './components/Table';
import './App.css';

function App() {
  const [filter, setFilter] = useState<string>('');
  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value);
  }

  return (
    <ContextProvider>
      <div>
        <h1>Star Wars Planets</h1>
        <input
          type="text"
          name="name"
          onChange={ (e) => handleFilter(e) }
          data-testid="name-filter"
        />
        <Table filter={ filter } />
      </div>
    </ContextProvider>
  );
}

export default App;
