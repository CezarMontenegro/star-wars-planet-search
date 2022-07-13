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
        <div>
          <h1>Star Wars Planets</h1>
          <input
            type="text"
            name="name"
            onChange={ (e) => handleFilter(e) }
            data-testid="name-filter"
          />
        </div>
        <div>
          <select data-testid="column-filter">
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
          <select data-testid="comparison-filter">
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
          <input type="number" data-testid="button-filter" />
          <button type="button">
            Filtrar
          </button>
        </div>
        <Table filter={ filter } />
      </div>
    </ContextProvider>
  );
}

export default App;
