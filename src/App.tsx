import React, { useContext } from 'react';
import ContextProvider, { PlanetsContext } from './context/ContextProvider';
import './App.css';

function App() {
  const { data, setData } = useContext(PlanetsContext);

  return (
    <ContextProvider>
      <p>papai</p>
    </ContextProvider>
  );
}

export default App;
